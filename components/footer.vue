<template>
  <footer class="footer">
    <div class="line">
      <b>Foto-Credits:</b> Stadt Wien/Bubu Dujmic, WienTourismus - Christian Stemper, Wien Tourismus - Peter Rigaud,
      Stadt Wien, Markus Eckwolf, BilderBox.com, PID - Schaub-Walzer, iStockphoto, Stadt Wien - Christian Jobst
    </div>
    <div class="line">
      © Stadt Wien, Rathaus, A-1010 Wien •
      <NuxtLink to="https://www.wien.gv.at/info/impressum.html">Impressum</NuxtLink>
      •
      <NuxtLink to="https://www.wien.gv.at/info/datenschutz/index.html">Datenschutz</NuxtLink>
      •
      <NuxtLink to="https://www.wien.gv.at/info/barrierefreiheit.html">Barrierefreiheit</NuxtLink>
    </div>
    <div class="block">
      <div class="column">
        <h3>Kontakte zur Stadt</h3>
        <ul>
          <li>
            <NuxtLink to="https://www.wien.gv.at/kontakte/">Kontakte zur Stadt</NuxtLink>
          </li>
          <li>
            <NuxtLink to="https://www.wien.gv.at/personensuche/">Suche nach Personen in Magistrat und Stadtpolitik
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="https://www.wien.gv.at/formularserver2/user/formular.aspx">Wünsche und Anregungen -
              BürgerInnen-Anliegen Online
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="https://www.wien.gv.at/kontakte/stadtservice/">Stadtservice Wien</NuxtLink>
          </li>
          <li>
            <NuxtLink to="https://www.wien.gv.at/kontakte/md-eui/delegationen.html">Internationale Delegationsanfragen
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="column">
        <h3>Leserservice</h3>
        <ul>
          <li>
            <NuxtLink to="https://www.wien.gv.at/info/">Hinweise zu wien.at</NuxtLink>
          </li>
          <li>
            <NuxtLink to="https://www.wien.gv.at/vadb/internet/">Veranstaltungen</NuxtLink>
          </li>
          <li>
            <NuxtLink to="https://www.wien.gv.at/medien/newsletter.html">Newsletter anfordern</NuxtLink>
          </li>
          <li>
            <NuxtLink to="https://www.wien.gv.at/medien/shop/">Bestellservice</NuxtLink>
          </li>
          <li>
            <NuxtLink to="https://vorteilsclub.wien.at/">Vorteilsclub</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="column">
        <h3>Öffentliche Verlautbarungen</h3>
        <ul>
          <li>
            <NuxtLink to="https://www.wien.gv.at/recht/">Rechtsinformationen</NuxtLink>
          </li>
          <li>
            <NuxtLink to="https://www.gemeinderecht.wien.at/recht/gemeinderecht-wien/vergabeverfahren/">
              Vergabeverfahren
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="https://www.gemeinderecht.wien.at/recht/gemeinderecht-wien/">Gemeinderecht</NuxtLink>
          </li>
          <li>
            <NuxtLink to="https://www.wien.gv.at/finanzen/budget/veroeffentlichungen-agvo.html">Veröffentlichungen nach
              AGVO
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="https://www.wien.gv.at/medien/print/amtsblatt/">Amtsblatt der Stadt Wien</NuxtLink>
          </li>
          <li>
            <NuxtLink to="https://www.wien.gv.at/verwaltung/studien/">Studien im Auftrag der Stadt Wien</NuxtLink>
          </li>
          <li>
            <NuxtLink to="https://www.wien.gv.at/verwaltung/rechnungshof-stellungnahmen/">Stellungnahmen an den
              Rechnungshof
            </NuxtLink>
          </li>
          <li class="mtop20">
            <NuxtLink to="https://www.wien.gv.at/verwaltung/personal/">Arbeiten bei der Stadt</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="column">
        <h3>Medienservice</h3>
        <ul>
          <li>
            <NuxtLink to="https://presse.wien.gv.at/">Presseaussendungen (rk)</NuxtLink>
          </li>
          <li>
            <NuxtLink to="https://wien.gv.at/pressebilder">Pressebilder</NuxtLink>
          </li>
          <li>
            <NuxtLink to="https://www.wien.gv.at/kontakte/ma53/">Kommunikation und Medien</NuxtLink>
          </li>
          <li>
            <NuxtLink to="https://www.wien.gv.at/medien/">Medienstadt Wien</NuxtLink>
          </li>
          <li>
            <NuxtLink to="https://www.wien.gv.at/statistik/">Statistik Wien</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style>
.footer {
  width: 100%;
  padding: 20px 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 12px;
  background-color: #e6e6e6;
  margin-top: 40px;
  line-height: 18px;

  .line {
    width: 100%;
    margin-bottom: 10px;
  }

  .block {
    display: flex;
    justify-content: space-between;
  }

  .column {
    flex: 1 1 25%;
    margin-right: 20px;
  }

  h3 {
    margin-bottom: 10px;
    margin-top: 20px;
  }

  .mtop20 {
    margin-top: 20px;
  }

  @media screen and (max-width: 1280px) {
  }

  @media screen and (max-width: 640px) {
    .block {
      flex-direction: column;
    }
    padding: 20px 10px;
  }
}
</style>
