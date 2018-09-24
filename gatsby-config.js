module.exports = {
  pathPrefix: '/madrid.knowit.no',
  siteMetadata: {
    title: 'Knowit Stavanger Fagseminar',
    data: {
      title: 'Fagseminar høst 2018',
      keywords: ['knowit', 'fagseminar', 'stavanger', 'madrid', '2018'],
      // keywords: 'knowit',
      event: {
          date: '25. oktober - 28. oktober 2018',
          longDate: '25. oktober - 28. oktober 2018',
          venue: 'Meliá Castilla, Calle del Poeta Joan Maragall, 43, Madrid, España',
          hotel: 'Meliá Castilla',
          address: 'Calle del Poeta Joan Maragall, 43',
          city: 'Madrid',
          country: 'España',
          gmapsUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3035.6269024565067!2d-3.6943040487441863!3d40.46139406074399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd1ce794508da5e9d!2sMeli%C3%A1+Castilla!5e0!3m2!1sen!2sno!4v1537421113811',
        }
      ,
      schedules: [
        {
          day: 'Torsdag 25. Oktober',
          collections: [
            {
              time: '16:30',
              title: 'Flyet drar fra Stavanger Lufthavn',
            },
            {
              time: '22:00',
              title: 'Vi ankommer Madrid',
            },
          ],
        },
        {
          day: 'Fredag 26. Oktober',
          collections: [
            {
              time: '07:00-09:00',
              title: 'Frokost',
            },
            {
              time: '09:00-09:15',
              title: 'Velkommen til MadCon Dev Track - Froddgeir',
            },
            {
              time: '09:15-09:45',
              title: 'Tales from Altibox - Henrik',
            },
            {
              time: '09:45-10:15',
              title: 'Update fra JavaZone - Sindre',
            },
            {
              time: '10:15-11:00',
              title: 'Flutter (Google) - Johan',
            },
            {
              time: '11:00-11:15',
              title: 'Pause',
              isBreak: true,
            },
            {
              time: '11:15-12:00',
              title: 'Maskinlæring ting - Truls',
            },
            {
              time: '12:00-13:00',
              title: 'Lunch',
              isBreak: true,
            },
            {
              time: '13:00-14:00',
              title: 'Kategori Teori - Oddgeir',
            },
            {
              time: '14:00-15:00',
              title: 'GitOps med JenkinsX på Kubernetes - Frode',
            },
            {
              time: '15:10-15:15',
              title: 'Pause',
              isBreak: true,
            },
            {
              time: '15:15-16:15',
              title: 'Azure m.m. - Glenn',
            },
            {
              time: '16:15-17:00',
              title: 'Espens historietime - Espen',
            },
          ],
        },
        {
          day: 'Lørdag 27. Oktober',
          collections: [
            {
              time: '07:00-10:00',
              title: 'Frokost',
            },
            {
              time: '19:15',
              title: '? Felles avgang til restaurant',
            },
            {
              time: '19:30',
              title: '? Restaurant',
            },
          ],
        },
        {
          day: 'Søndag 28. Oktober',
          collections: [
            {
              time: '07:00-10:00',
              title: 'Frokost',
            },
            {
              time: '12:00-13:00',
              title: '? Lunsj',
            },
            {
              time: '13:00',
              title: '? Avreise til flyplassen',
            },
            {
              time: '15:25',
              title: 'Fly til Oslo',
            },
            {
              time: '20:45',
              title: 'Fly til Stavanger',
            },
          ],
        },
      ],
      talks:
        {
          internmeet: {
            pending: false,
            speakers:
              [
                {
                  name: 'Jan Henrik Gundelsby',
                  bio:
                    'Jan Henrik er fagsjef i Knowit Objectnet. Jobber for tiden litt hos Oslo kommune med arkitektur og prosess. Driver også med salg, marked og hvordan vi skal få de rette nye prosjektene. Glad i naturen og lidenskapelig opptatt av fag!',
                  email: 'jhg@knowit.no',
                  pic: 'jhg.jpg',
                },
              ],
            title:
              'Velkommen og internmøte',
            type:
              'Talk',
            description:
              'Beskrivelse kommer',
          },
        },
    }
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
