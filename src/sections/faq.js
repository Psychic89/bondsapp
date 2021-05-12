/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import SectionHeader from 'components/section-header';
import Accordion from 'components/accordion/accordion';
const faqs = [
  {
    title: 'What is automated bond issuance?',
    contents: (
      <div>
          Automated bond issuance means that a person can apply for bank bonds through an automated process. EBonds performs this process through one of its products called EBonds AutoBonds.
          EBonds Autobonds allows customers to conveniently procure bonds in a few minutes online. The entire process takes place on the users’ phone, so there is no need for any face-to-face interaction to start onboarding.
      </div>
    ),
  },
  {
    title: 'What are EBond’s greatest advantages?',
    contents: (
      <div>
          Our solutions stand out due to three great advantages: a great user experience, modern technology and high level of flexibility. Thanks to the distinctive user-focused products, financial institutions which establish EBanks in their bonds issuance processes profit from an improvement of the conversion rate in comparison to analogue issuance processes. Furthermore, they can integrate the EBanks interface easily into their own website or native iOS/Android apps.
      </div>
    ),
  },
  {
    title: `In what cases can I use an automatic bonds issuance?`,
    contents: (
      <div>
          Whenever you want to issue bonds quickly and safely or read data from ID and company registration documents, EBonds AutoBonds can be used. EBonds AutoBonds integrates seamlessly with bank customer portals, performs company verification, and captures ID data for banking industries and automate the issuance of bonds.
      </div>
    ),
  },
    {
        title: `Is my customers’ data secure?`,
        contents: (
            <div>
                Yes! All communication takes place via encrypted channels. Only high-security data centers located in the European Union are used. Upon request, any data fields in the recorded ID documents can be blackened out in order to act in accordance with the principle of data minimization. We will also gladly work with you in the framework of an Order Data Processing Agreement (ODPA).
            </div>
        ),
    },
    {
        title: `Can I have my own customized app?`,
        contents: (
            <div>
                Yes, we can offer you our customizable Native App or develop a customized App just for you. Another possibility is to integrate to your own developed app through SDK integration.
                Our SaaS solution also allows you to have a fully customized experience.
            </div>
        ),
    },
    {
        title: `In which countries and languages is EBonds available?`,
        contents: (
            <div>
                EBonds is available worldwide, supporting ID and company registration documents (passports, ID cards, Residency permits, and Driver’s licenses) in accordance with the common ICAO standard. At the moment, we cover documents in over 195 countries. Our software is also available in the following languages – English, German, French, Spanish and Portuguese.
                We consistently work on adding new languages. If you require additional languages, we can support you with your requests.
            </div>
        ),
    },
    {
        title: `What do my customers need to generate bonds using EBonds?`,
        contents: (
            <div>
                For the automatic identity verification via EBonds AutoBonds, your customers will need:
                A smartphone with a camera in the back and the front side of the phone,
                valid company registration documents,
                a valid ID document of directors,
                an Internet connection.

            </div>
        ),
    },
  {
    title: `How easy is the process for my customers?`,
    contents: (
      <div>
          EBonds is proud to offer a user-friendly process that can take only a few minutes. This process can be covered in 3 main steps: Customer signup, company registration, bond generation and payments.
      </div>
    ),
  },
];
export default function Faq() {
  return (
    <section sx={{ variant: 'section.faq' }}>
      <Container>
        <SectionHeader
          title="Frequently asked questions"
          slogan="Get your question answered"
        />
        <Box
          sx={{
            display: 'flex',
            width: ['100%', null, null, '650px', '745px'],
            flexDirection: 'column',
            mx: 'auto',
            my: -4,
          }}
        >
          <Accordion items={faqs} />
        </Box>
      </Container>
    </section>
  );
}
