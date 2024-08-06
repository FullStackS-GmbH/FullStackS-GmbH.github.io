function FindProxyForURL(url, host) {
  if (dnsDomainIs(host, "vault.lab.cloudstacks.eu"))
    return "DIRECT";
  if (dnsDomainIs(host, "lab.cloudstacks.eu")) 
    return "PROXY 127.0.0.1:3128";  
  if (dnsDomainIs(host, "grz.cloudstacks.eu")) 
    return "PROXY 127.0.0.1:3128";

  return "DIRECT";
}
