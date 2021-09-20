const HTTP_ERROR = {
  continue: {
    title: 'Continue',
    path: '/continue',
    status: 100,
  },
  switchingProtocols: {
    title: 'Switching protocols',
    path: '/switchingProtocols',
    status: 101,
  },
  processing: {
    title: 'Processing',
    path: '/processing',
    status: 102,
  },
  checkpoint: {
    title: 'Checkpoint',
    path: '/checkpoint',
    status: 103,
  },
  ok: {
    title: 'Ok',
    path: '/ok',
    status: 200,
  },
  created: {
    title: 'Created',
    path: '/created',
    status: 201,
  },
  accepted: {
    title: 'Accepted',
    path: '/accepted',
    status: 202,
  },
  nonAuthoritativeInformation: {
    title: 'Non authoritative information',
    path: '/nonAuthoritativeInformation',
    status: 203,
  },
  noContent: {
    title: 'No content',
    path: '/noContent',
    status: 204,
  },
  resetContent: {
    title: 'Reset content',
    path: '/resetContent',
    status: 205,
  },
  partialContent: {
    title: 'Partial content',
    path: '/partialContent',
    status: 206,
  },
  multiStatus: {
    title: 'Multi status',
    path: '/multiStatus',
    status: 207,
  },
  multipleChoices: {
    title: 'Multiple choices',
    path: '/multipleChoices',
    status: 300,
  },
  movedPermanently: {
    title: 'Moved permanently',
    path: '/movedPermanently',
    status: 301,
  },
  found: {
    title: 'Found',
    path: '/found',
    status: 302,
  },
  seeOther: {
    title: 'See other',
    path: '/seeOther',
    status: 303,
  },
  notModified: {
    title: 'Not modified',
    path: '/notModified',
    status: 304,
  },
  useProxy: {
    title: 'Use proxy',
    path: '/useProxy',
    status: 305,
  },
  switchProxy: {
    title: 'Switch proxy',
    path: '/switchProxy',
    status: 306,
  },
  temporaryRedirect: {
    title: 'Temporary redirect',
    path: '/temporaryRedirect',
    status: 307,
  },
  badRequest: {
    title: 'Bad request',
    path: '/badRequest',
    status: 400,
  },
  unauthorized: {
    title: 'Unauthorized',
    path: '/unauthorized',
    status: 401,
  },
  paymentRequired: {
    title: 'Payment required',
    path: '/paymentRequired',
    status: 402,
  },
  forbidden: {
    title: 'Forbidden',
    path: '/forbidden',
    status: 403,
  },
  notFound: {
    title: 'Not found',
    path: '/notFound',
    status: 404,
  },
  methodNotAllowed: {
    title: 'Method not allowed',
    path: '/methodNotAllowed',
    status: 405,
  },
  notAcceptable: {
    title: 'Not acceptable',
    path: '/notAcceptable',
    status: 406,
  },
  proxyAuthenticationRequired: {
    title: 'Proxy authentication required',
    path: '/proxyAuthenticationRequired',
    status: 407,
  },
  requestTimeout: {
    title: 'Request timeout',
    path: '/requestTimeout',
    status: 408,
  },
  conflict: {
    title: 'Conflict',
    path: '/conflict',
    status: 409,
  },
  gone: {
    title: 'Gone',
    path: '/gone',
    status: 410,
  },
  lengthRequired: {
    title: 'Length required',
    path: '/lengthRequired',
    status: 411,
  },
  preconditionFailed: {
    title: 'Precondition failed',
    path: '/preconditionFailed',
    status: 412,
  },
  requestEntityTooLarge: {
    title: 'Request entity too large',
    path: '/requestEntityTooLarge',
    status: 413,
  },
  requestUritooLong: {
    title: 'Request uritoo long',
    path: '/requestUritooLong',
    status: 414,
  },
  unsupportedMediaType: {
    title: 'Unsupported media type',
    path: '/unsupportedMediaType',
    status: 415,
  },
  requestedRangeNotSatisfiable: {
    title: 'Requested range not satisfiable',
    path: '/requestedRangeNotSatisfiable',
    status: 416,
  },
  expectationFailed: {
    title: 'Expectation failed',
    path: '/expectationFailed',
    status: 417,
  },
  unprocessableEntity: {
    title: 'Unprocessable entity',
    path: '/unprocessableEntity',
    status: 422,
  },
  locked: {
    title: 'Locked',
    path: '/locked',
    status: 423,
  },
  failedDependency: {
    title: 'Failed dependency',
    path: '/failedDependency',
    status: 424,
  },
  unorderedCollection: {
    title: 'Unordered collection',
    path: '/unorderedCollection',
    status: 425,
  },
  upgradeRequired: {
    title: 'Upgrade required',
    path: '/upgradeRequired',
    status: 426,
  },
  retryWith: {
    title: 'Retry with',
    path: '/retryWith',
    status: 449,
  },
  blockedByWindowsParentalControls: {
    title: 'Blocked by windows parental controls',
    path: '/blockedByWindowsParentalControls',
    status: 450,
  },
  internalServerError: {
    title: 'Internal server error',
    path: '/internalServerError',
    status: 500,
  },
  notImplemented: {
    title: 'Not implemented',
    path: '/notImplemented',
    status: 501,
  },
  badGateway: {
    title: 'Bad gateway',
    path: '/badGateway',
    status: 502,
  },
  serviceUnavailable: {
    title: 'Service unavailable',
    path: '/serviceUnavailable',
    status: 503,
  },
  gatewayTimeout: {
    title: 'Gateway timeout',
    path: '/gatewayTimeout',
    status: 504,
  },
  httpversionNotSupported: {
    title: 'Httpversion not supported',
    path: '/httpversionNotSupported',
    status: 505,
  },
  variantAlsoNegotiates: {
    title: 'Variant also negotiates',
    path: '/variantAlsoNegotiates',
    status: 506,
  },
  insufficientStorage: {
    title: 'Insufficient storage',
    path: '/insufficientStorage',
    status: 507,
  },
  bandwidthLimitExceeded: {
    title: 'Bandwidth limit exceeded',
    path: '/bandwidthLimitExceeded',
    status: 509,
  },
  notExtended: {
    title: 'Not extended',
    path: '/notExtended',
    status: 510,
  },
};

export default HTTP_ERROR;
