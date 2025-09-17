import { NextResponse } from 'next/server';

// Define protected routes that require authentication
const protectedRoutes = [
    '/admin',
    '/dashboard',
    '/profile',
    '/settings',
    '/api/protected'
];

// Define public routes that don't require authentication
const publicRoutes = [
    '/',
    '/courses',
    '/project',
    '/plans',
    '/testimonials',
    '/contactus',
    '/privacypolicy',
    '/termsandconditions',
    '/login',
    '/not-found',
    '/api/send-email'
];

export function middleware(request) {
    const { pathname } = request.nextUrl;

    // Check if the route is protected
    const isProtectedRoute = protectedRoutes.some(route =>
        pathname.startsWith(route)
    );

    // Check if the route is public
    const isPublicRoute = publicRoutes.some(route =>
        pathname === route || pathname.startsWith(route)
    );

    // If it's a protected route, check for authentication
    if (isProtectedRoute) {
        // Check for authentication token (you can modify this based on your auth system)
        const token = request.cookies.get('auth-token')?.value ||
            request.headers.get('authorization');

        if (!token) {
            // Redirect to login page or return unauthorized
            const loginUrl = new URL('/login', request.url);
            loginUrl.searchParams.set('redirect', pathname);
            return NextResponse.redirect(loginUrl);
        }

        // You can add token validation logic here
        // For now, we'll assume the token is valid if it exists
    }

    // Block access to unknown routes (not in public or protected lists)
    if (!isPublicRoute && !isProtectedRoute) {
        // Check if it's a static file or Next.js internal route
        if (
            pathname.startsWith('/_next/') ||
            pathname.startsWith('/api/') ||
            pathname.includes('.') ||
            pathname.startsWith('/favicon') ||
            pathname.startsWith('/images/') ||
            pathname.startsWith('/icons/')
        ) {
            return NextResponse.next();
        }

        // For unknown routes, show 404 page
        const notFoundUrl = new URL('/not-found', request.url);
        return NextResponse.rewrite(notFoundUrl);
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!_next/static|_next/image|favicon.ico).*)',
    ],
};