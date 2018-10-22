module.exports = {
  siteMetadata: {
    title: 'Knowit Stavanger Fagseminar',
    data: {
      title: 'Fagseminar høst 2018',
      keywords: ['knowit', 'fagseminar', 'stavanger', 'madrid', '2018'],
      // keywords: 'knowit',
      event: {
        date: '25. oktober - 28. oktober 2018',
        longDate: '25. oktober - 28. oktober 2018',
        venue:
          'Meliá Castilla, Calle del Poeta Joan Maragall, 43, Madrid, España',
        hotel: 'Meliá Castilla',
        address: 'Calle del Poeta Joan Maragall, 43',
        city: 'Madrid',
        country: 'España',
        gmapsUrl:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3035.6269024565067!2d-3.6943040487441863!3d40.46139406074399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd1ce794508da5e9d!2sMeli%C3%A1+Castilla!5e0!3m2!1sen!2sno!4v1537421113811',
      },
      schedules: [
        {
          day: 'Torsdag 25. Oktober',
          collections: [
            {
              time: '16:30',
              title: 'Flyet drar fra Stavanger Lufthavn',
              link: ''
            },
            {
              time: '22:25',
              title: 'Vi ankommer Madrid',
              link: ''
            },
          ],
        },
        {
          day: 'Fredag 26. Oktober',
          showHeader: true,
          collections: [
            {
              time: '07:00-09:00',
              title: 'Frokost',
              link: ''
            },
            {
              time: '09:00-09:15',
              title: 'Velkommen til MadCon Dev Track - Froddgeir',
              titleS: 'Velkommen',
              link: ''
            },
            {
              time: '09:15-09:45',
              title: 'Tales from Altibox - Henrik',
              titleS: 'Sjekkliste: viktige faktorer for en vellykket nettside (Del I)',
              link: ''
            },
            {
              time: '09:45-10:15',
              title: 'Update fra JavaZone - Sindre',
              titleS: 'Sjekkliste: viktige faktorer for en vellykket nettside (Del II)',
              link: ''
            },
            {
              time: '10:20-11:00',
              title: 'Flutter (Google) - Johan',
              titleS: 'Søkemotoroptimalisering metoder som fungerer!',
              link: ''
            },
            {
              time: '11:00-11:15',
              title: 'Pause',
              isBreak: true,
              link: ''
            },
            {
              time: '11:15-12:00',
              title: 'Maskinlæring ting - Truls',
              titleS: 'Hvorfor bruke Instagram?',
              link: ''
            },
            {
              time: '12:00-13:00',
              title: 'Kategori Teori - Oddgeir',
              titleS: 'Google Shopping for nettbutikker',
              link: ''
            },
            {
              time: '13:00-14:00',
              title: 'Lunch',
              isBreak: true,
              link: ''
            },
            {
              time: '14:00-15:00',
              title: 'GitOps med JenkinsX på Kubernetes - Frode',
              titleS: 'Videoannonsering på YouTube',
              link: ''
            },
            {
              time: '15:10-15:15',
              title: 'Pause',
              isBreak: true,
              link: ''
            },
            {
              time: '15:15-16:15',
              title: 'Azure m.m. - Glenn',
              titleS: 'Oppsummerende refleksjoner og diskusjon',
              link: ''
            },
            {
              time: '16:15-17:00',
              title: 'Espens historietime - Espen',
            },
            {
              time: '20:15',
              title: 'Middag: Saporem, Ventura de la Vega 5',
              link: 'http://the-saporem.tumblr.com/'
            },
          ],
        },
        {
          day: 'Lørdag 27. Oktober',
          collections: [
            {
              time: '07:00-10:00',
              title: 'Frokost',
              link: ''
            },
            {
              time: '19:15',
              title: '? Felles avgang til restaurant',
              link: ''
            },
            {
              time: '20:00',
              title: 'Middag: El Botin',
              link: 'https://www.google.com/maps?q=C/+de+Cuchilleros,+17++%0D%0A+28005+Madrid"'
            },
          ],
        },
        {
          day: 'Søndag 28. Oktober',
          collections: [
            {
              time: '07:00-10:00',
              title: 'Frokost',
              link: ''
            },
            {
              time: '12:00-13:00',
              title: '? Lunsj',
              link: ''
            },
            {
              time: '13:00',
              title: '? Avreise til flyplassen',
              link: ''
            },
            {
              time: '15:25',
              title: 'Fly til Oslo',
              link: ''
            },
            {
              time: '20:45',
              title: 'Fly til Stavanger',
              link: ''
            },
          ],
        },
      ],
      talks: {
        internmeet: {
          pending: false,
          speakers: [
            {
              name: 'Jan Henrik Gundelsby',
              bio:
                'Jan Henrik er fagsjef i Knowit Objectnet. Jobber for tiden litt hos Oslo kommune med arkitektur og prosess. Driver også med salg, marked og hvordan vi skal få de rette nye prosjektene. Glad i naturen og lidenskapelig opptatt av fag!',
              email: 'jhg@knowit.no',
              pic: 'jhg.jpg',
            },
          ],
          title: 'Velkommen og internmøte',
          type: 'Talk',
          description: 'Beskrivelse kommer',
        },
      },
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'knowit-stavanger-madrid-conference',
        short_name: 'MadCon',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/madcon-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
