function FindProxyForURL(url, host) {
  if (dnsDomainIs(host, "lab.cloudstacks.eu")) 
    return "PROXY 127.0.0.1:3128";  
  return "DIRECT";
}
