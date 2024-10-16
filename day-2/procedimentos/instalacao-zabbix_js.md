## Instalar o Zabbix JS - Debian 11
> wget https://repo.zabbix.com/zabbix/7.0/debian/pool/main/z/zabbix-release/zabbix-release_7.0-2+debian11_all.deb
> dpkg -i zabbix-release_7.0-2+debian11_all.deb
> apt update


## Instalar o Zabbix JS - OL 8
> rpm -Uvh https://repo.zabbix.com/zabbix/7.0/oracle/8/x86_64/zabbix-release-7.0-5.el8.noarch.rpm
> dnf clean all
> dnf install zabbix_js

## Utilizando zabbix_js.

Opções: 
```
  zabbix_js -s script-file -p input-param [-l log-level] [-t timeout]
  zabbix_js -s script-file -i input-file [-l log-level] [-t timeout]
  zabbix_js -h
  zabbix_js -V
```
General options:
```
  -s,--script script-file      Specify the filename of script to execute. Specify - for
                               standard input.
  -i,--input input-file        Specify input parameter file name. Specify - for
                               standard input.
  -p,--param input-param       Specify input parameter
  -w,--webdriver url           Specify webdriver URL
  -l,--loglevel log-level      Specify log level
  -t --timeout timeout         Specify the timeout in seconds. Valid range: 1-60 seconds
                               (default: 10 seconds)
  -h --help                    Display this help message
  -V --version                 Display version number
```

Gerar os dados de Teste:
> zabbix_js -s gerar-dado.js -p1


### Link Uteis:
* Validador do JSON: https://jsonlint.com/
* JSON PATH: https://jsonpath.com/