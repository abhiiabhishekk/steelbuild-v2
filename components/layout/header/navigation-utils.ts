export function getCleanPath(href: string) {
  return href.split("#")[0] || "/";
}

export function getHrefHash(href: string) {
  const [, hash] = href.split("#");

  return hash ? `#${hash}` : "";
}

export function isPathActive(
  pathname: string,
  currentHash: string,
  href: string,
) {
  const hrefPath = getCleanPath(href);
  const hrefHash = getHrefHash(href);

  if (hrefPath === "/") {
    return pathname === "/" && !hrefHash;
  }

  const pathMatches =
    pathname === hrefPath ||
    pathname.startsWith(`${hrefPath}/`);

  if (!pathMatches) {
    return false;
  }

  /*
   * Hash link:
   * /careers#open-positions
   */
  if (hrefHash) {
    return currentHash === hrefHash;
  }

  /*
   * Normal page:
   * /careers
   *
   * It should only be active when no hash section
   * is currently selected.
   */
  return pathname === hrefPath && !currentHash;
}

export function isParentPathActive(
  pathname: string,
  href: string,
) {
  const hrefPath = getCleanPath(href);

  if (hrefPath === "/") {
    return pathname === "/";
  }

  return (
    pathname === hrefPath ||
    pathname.startsWith(`${hrefPath}/`)
  );
}