# Instalação Zabbix Agent 2
Material utilizado no Dia 1 da Maratona Zabbix 7.0 - JLCP


- [Instalação Zabbix Agent 2](#instalação-zabbix-agent-2)


## Instalar Zabbix Agent 2

### Instalar repositório oficial

```bash
rpm -Uvh https://repo.zabbix.com/zabbix/7.0/oracle/8/x86_64/zabbix-release-7.0-2.el8.noarch.rpm
```

### Limpar cache e remover repositórios antigos
  
```bash
dnf clean all
```

Output:

```bash
20 files removed
```

### Instalando no Zabbix Server

```bash
dnf -y install zabbix-agent2
```

### Editar arquivo de configuração do Zabbix Server

```bash
vim /etc/zabbix/zabbix_agent2.conf
```

```bash
Server=127.0.0.1
ServerActive=127.0.0.1
# Hostname=Zabbix server # Deixar comentado
```

### Habilitar inicialização do serviço e inicia-lo

```bash
systemctl enable --now zabbix-agent2.service
systemctl status zabbix-agent2.service
```

### Verifique os logs do Zabbix Server e veja se tem erros

```bash
tail -n50 /var/log/zabbix/zabbix_agentd.log
```