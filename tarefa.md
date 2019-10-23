# Tarefa - Criação de página WEB com um gráfico sobre o congresso nacional

Prazo: sexta-feira, 25/10, às 12h;

Tempo disponível: 4h a partir da submissão do formulário


# Descrição da tarefa:

Imagine que queremos disponibilizar à sociedade, em uma página web, informações interessantes sobre a dinâmica dos parlamentares. Para isso, pensamos em usar como fonte uma base de dados sobre como os deputados, em plenário, votaram em relação à diversos projetos de lei, emendas à constituição, entre outras proposições. A página web, o nosso produto final, deve incluir ao menos um gráfico informativo e ambos (a página e o gráfico) devem ser esteticamente agradáveis e amplamente compreensíveis. A qualidade do design e da informação apresentada na página e a garantia de compreensão do cidadão usuário são aspectos mais relevantes, neste caso, do que a quantidade de informação ou de gráficos. Exemplos de páginas desse tipo são os gráficos do Jornal Nexo, o GPS ideológico da Folha de S. Paulo ou a seção de gastos anuais na página dos deputados.


## Passo a passo:

a) Pense em alguma informação interessante que possa ser extraída dos dados e representada na forma de um gráfico (veja abaixo a descrição dos dados). Existem diversas possibilidades de análise que podem ser feitas, não existe uma única resposta correta. Escolha uma que você julgue interessante e que seja exequível dentro do prazo. Alguns exemplos são: o tamanho dos partidos, em número de deputados; o grau de fidelidade partidária; o grau de apoio dos deputados ao governo.

b) Acesse o seguinte formulário do Google: https://forms.gle/G4UvjRBNZAjYQHHn8. Após preencher com seu nome, email e submeter o formulário, você verá links para baixar duas versões de uma mesma base de dados, uma em formato CSV e outra em formato JSON. Escolha a que preferir e salve no seu computador (ou salve as duas, se preferir). Ao submeter o formulário, o tempo para finalização da tarefa começará a ser contado.

c) Crie uma página web, que pode ser local (i.e. no seu computador) ou hospedada num servidor, que serviria de "painel" para apresentar aos cidadãos a informação contida nos dados. Você pode usar a ferramenta que quiser (JavaScript, powerBI, Tableau, django, html, css, mpld3, bokeh, plotly, wordpress, google datastudio), embora seja preferível o uso de ferramentas gratuitas e abertas. Caso necessário, você pode fazer uma análise ou processamento prévio dos dados, fora da página e num ambiente diferente (como jupyter notebook, excel, matlab).

d) Envie os arquivos utilizados na análise prévia (se houver) para henrique.xavier@senado.leg.br, junto com os arquivos da página web (no caso de uma página local) ou, no caso de uma página hospedada em um servidor, o link para a página criada e o conteúdo da página tal qual apresentado ao usuário pelo navegador. É importante que o conteúdo dos arquivos seja fácil de entender (e.g. organizado, com comentários mínimos, etc.).


## Descrição dos dados:

A base de dados que você deve utilizar contém informações sobre votações de proposições no plenário da câmara dos deputados. Cada linha corresponde ao voto de um deputado numa certa votação. A base de dados contém informações sobre 31 votações ocorridas num período contínuo de aproximadamente um mês, sendo que para cada votação temos informações sobre os 513 deputados (o que totaliza 15903 linhas). Ao longo do tempo, alguns poucos deputados podem ser substituídos por suplentes.


## As colunas da base de dados são:
- **num_votacao:** um número sequencial que identifica uma única votação de forma unívoca;
- **timestamp:** a data (no formato aaaa-mm-dd) e horário (no formato hh:mm:ss) da votação, separados por "T", e.g.:** 2019-08-20T17:25:00;
- **sigla_tipo:** uma sigla que identifica o tipo de proposição que está sendo votada, por exemplo:** PL (projeto de lei), PEC (proposta de emenda à constituição), MPV (medida provisória), REQ (requerimento);
- **numero:** um número que identifica a proposição de um certo tipo e ano (isto é, uma proposição é identificada de maneira unívoca pela combinação da sigla acima, do número e do ano, ex.:** PEC110/2016);
- **ano:** em geral o ano no qual a proposição foi apresentada, serve para identificar a proposição conforme explicado acima;
- **obj_votacao:** descreve de maneira mais específica o que está sendo votado em relação à proposição. Às vezes se quer votar se um certo artigo específico de um projeto de lei deve ser aceito ou não, se uma PEC deve ser engavetada, se a votação de uma medida provisória deve ser adiada, etc;
- **url_inteiro_teor:** um link para um PDF que apresenta o conteúdo da proposição sendo votada;

- **id_deputado:** um número de identifica univocamente um deputado;

- **nome:** o nome do deputado, que também identifica de maneira unívoca o deputado;

- **sigla_partido:** a sigla do partido do deputado em questão (ou nome do partido, no caso de partidos sem sigla, como "Podemos", "Progressistas"). Também existem casos de deputados sem partido, que estão identificados com sigla_partido = S.PART.;

- **uf:** a sigla da unidade federativa (estados e distrito federal) do deputado em questão;

- **voto:** o voto do deputado em questão, na votação em questão. O voto pode ser:** "Não" (o deputado é contra o que está sendo votado), "Abstenção" (o deputado conta para o quórum - isto é, número de presentes na votação - mas não emite opinião sobre o assunto), "Ausente" (o deputado não estava presente no momento da votação, e portanto não vota nem conta para o quórum), "Obstrução" (embora presente, o deputado se recusa a registrar a presença na votação e contar para o quórum. Essa tática é geralmente utilizada para tentar impedir a obtenção de quórum mínimo e com isso impedir que a votação aconteça), "Sim" (o deputado é a favor do que está sendo votado), "Art. 17" (o deputado não pode votar pois é membro da mesa diretora, isto é, ele está organizando a votação).

- **orient_part:** a orientação do partido, ou seja, como o partido do deputado quer que ele vote. Essa orientação é divulgada a todos os deputados antes da votação acontecer. Ela pode ser:** "Obstrução", "Não", "Sim" e "Liberado" (nesse caso, o partido não pede um tipo de voto específico para os deputados). Também existem casos dessa informação estar faltando, e nesse caso podemos assumir que o deputado está liberado.

- **orient_gov:** a orientação do governo, ou seja, como o executivo federal quer que os deputados votem. Ela pode assumir os mesmos valores que a orientação dos partidos (i.e. "Obstrução", "Não", "Sim" e "Liberado"). Essa orientação também é divulgada antes da votação acontecer.
