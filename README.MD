# Template Nodejs Typescript

:information_source: Este repositorio é um template para ambiente de desenvolvimento 'NestJs' e 'Clean Arch'.

### [Guia de Convenções e Arquitetura](./doc/README.MD)

## ℹ️ Ferramentas para desenvolvimento;

- Dev Container.
- Husky Hooks.
- EsLint.
  - Import Helpers.
- Prettier.
- Sonar.
- Jest.
- create-typescript-import.

## :warning: Pré requisitos.

Adicione a extensão **ms-vscode-remote.vscode-remote-extensionpack**

## :warning: Checklist.

Alterar as palavras `project-name` pelo nome do projeto.

✔️ Arquivo [package.json](./package.json) global

```dif
Linhas: :2:12 - :4:19 - :19:26 - :20:28 - :21:31 - :21:75
```

Arquivo [package.json](./src/@core/package.json) do projeto @core

```dif
Linhas: :2:13
```

✔️ Arquivo [package.json](./src/nestjs/package.json) do projeto nestjs

```dif
Linhas: :2:13
```

✔️ Arquivo [package-lock.json](./package-lock.json)

```dif
Linhas: :2:12 - 8:16 - :2036:20 - :2040:20 - :10943:17 - :10949:17 - :12486:7 -:12492:7
```

✔️ Arquivo [docker-compose.yml](docker-compose.yml) _:6:21_

```dif
Linhas: :2:12 - 8:16 - :2036:20 - :2040:20 - :10943:17 - :10949:17 - :12486:7 -:12492:7
```

✔️ Arquivo [devcontainer.json](.devcontainer/devcontainer.json)

```dif
Linhas: :4:12
```

✔️ Arquivo [start-dev.sh](.docker/start-dev.sh)

```dif
Linhas: :10:13
```

✔️ Arquivo [jest.config.js](.docker/start-dev.sh)

```dif
Linhas: :1:52 - :20:7
```

## Dev Container.

1. Tecle `CTRL + SFITH + P`
2. Selecione a opção `Dev Containers: Open Folder in Container`.

- Caso seja necessário realizar reaload do VsCode pode utilizar a opção `Dev Containers: Reopen in Container`
- Caso seja necessário alterações no arquivo de DockerFile pode utilizar a opção `Dev Containers: Rebuild Without Cache and Reopen in Container`
