# Avisos personalizados + tolerância (strikes) + spam para compra/venda

## O que mudou

### 1. Avisos por tipo
Menu **Avisos e tolerância**: textos por palavra, spam, link, emoji, IA, tipo bloqueado.
Placeholders: `{reason}` `{strikes}` `{max}` `{remaining}`

### 2. Tolerância (strikes)
Cada violação conta 1 aviso; ao atingir o limite, remove do grupo. Limite 0 = nunca remove por strike.

### 3. Antispam para classificados
Flood geral mais alto; limite de imagens alto; imagem fora da lista padrão de tipos monitorados.

### Manual no painel
Menu **Manual** com guia de configuração.

### Anti-conflito
Com strikes ligados, expulsão só no limite (não na 1ª ofensa por "ação auto").
Modo seguro não incrementa strikes.
