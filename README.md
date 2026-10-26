# Deu Brick — Bot de Moderação WhatsApp (Obstance)

Bot de moderação para grupos de classificados **Deu Brick** (região metropolitana de Porto Alegre).

Base: **wa-moderator / Obstance** (Node.js + whatsapp-web.js + Ollama opcional + painel web).

## Repositórios irmãos

| Repo | Função |
|------|--------|
| [deubrick-portal-ai-studio](https://github.com/evertonlimasilva50-tech/deubrick-portal-ai-studio) | Portal de triagem, Tríade, denúncias, blacklist, QG |
| **este repo** | Moderação dentro dos grupos WhatsApp (filtros, strikes, avisos) |

## Recursos principais

- Filtro de palavras + anti-ofuscação
- Antispam configurável (adequado a fotos de anúncios)
- Anti-link e anti-emoji
- Avisos personalizados por tipo + sistema de strikes (tolerância)
- Tipos de mídia bloqueados
- Blacklist / whitelist
- IA local via Ollama (opcional)
- Painel admin + **Manual** no menu
- Modo seguro (só registra, sem punir)

## Integração prevista com o portal

O portal decide (aprovar Tríade, banir por denúncia). O bot executa no WhatsApp:

- `POST /api/bridge/approve` — liberar telefone
- `POST /api/bridge/ban` — blacklist + kick
- `POST /api/bridge/unban`
- `POST /api/bridge/kick`
- `POST /api/bridge/warn`
- `GET /api/bridge/member-check` — denúncia verificada (denunciante no grupo)

Chave comum: telefone normalizado (ex. `51999999999` / `5551999999999`).

## Como rodar

```bash
npm ci
cp .env.example .env   # se existir
npm start
```

Painel: `http://localhost:3000`

Documentação PT: `README_PT.md`, `CHANGELOG_AVISOS_TOLERANCIA.md`, menu **Manual** no painel.

## Segurança

- Não versionar `.wwebjs_auth`, `bot_data.sqlite`, `.env` com segredos
- Bot precisa ser **admin** do grupo
- Comece com modo seguro ligado em produção até validar regras
