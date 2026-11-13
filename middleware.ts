import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const acceptLanguage = request.headers.get('accept-language')

  // 如果 Accept-Language 只有 * 或者为空，替换为默认语言
  if (!acceptLanguage || acceptLanguage.trim() === '*' || acceptLanguage.startsWith('*')) {
    const requestHeaders = new Headers(request.headers)
    requestHeaders.set('accept-language', 'zh-CN,zh;q=0.9,en;q=0.8')
    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    })
  }

  // 过滤掉 Accept-Language 中的 * 项
  if (acceptLanguage.includes('*')) {
    const cleaned = acceptLanguage
      .split(',')
      .map(lang => lang.trim())
      .filter(lang => lang !== '*' && !lang.startsWith('*;'))
      .join(', ')

    if (cleaned) {
      const requestHeaders = new Headers(request.headers)
      requestHeaders.set('accept-language', cleaned)
      return NextResponse.next({
        request: {
          headers: requestHeaders,
        },
      })
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/:path*',
}
