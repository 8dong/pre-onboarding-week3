const setCookie = (name: string, value: string) => {
  const cookieName = encodeURIComponent(name);
  const cookieValue = encodeURIComponent(value);

  document.cookie = `${cookieName}=${cookieValue}`;
};

const getCookieValue = (findCookieName: string) => {
  const cookieArr = document.cookie.split('; ');

  for (let i = 0; i < cookieArr.length; i++) {
    const cookieName = decodeURIComponent(cookieArr[i].substring(0, cookieArr[i].indexOf('=')));
    const cookieValue = decodeURIComponent(cookieArr[i].substring(cookieArr[i].indexOf('=') + 1));

    if (cookieName === findCookieName) return cookieValue;
  }
};

const clearCookie = () => {
  const cookieArr = document.cookie.split('; ');

  const expiration = 'Sat, 01 Jan 1972 00:00:00 GMT';

  for (let i = 0; i < cookieArr.length; i++) {
    document.cookie = cookieArr[i].split('=')[0] + '=; expires=' + expiration;
  }
};

export { setCookie, getCookieValue, clearCookie };
