import type { Metadata } from 'next'
import { pageMetadata, PAGE_META } from '@/lib/metadata'
import { breadcrumbSchema, faqPageSchema, type FaqItem } from '@/lib/schema'
import { JsonLd } from '@/components/JsonLd'
import { Reveal } from '@/components/Reveal'
import { Breadcrumbs } from '@/components/sections/Breadcrumbs'
import { HeroBg } from '@/components/sections/HeroBg'
import { FAQAccordion } from '@/components/sections/FAQAccordion'
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = pageMetadata({ ...PAGE_META.faq, path: '/faq' })

const crumbs = [{ name: 'FAQ', path: '/faq' }]

const FAQ_GROUPS: { heading: string; items: FaqItem[] }[] = [
  {
    heading: 'About JC Brick & Blocklaying',
    items: [
      {
        question: 'Who is JC Brick & Blocklaying and where are they based?',
        answer:
          "JC Brick & Blocklaying is a masonry and bricklaying business owned and operated by Jamie Craig. Jamie is based in Croydon, Melbourne, in the city's eastern suburbs and has been laying brick professionally for 21 years. JC Brick & Blocklaying is a fully insured business recognised in the top 1% of Maroondah businesses by the Quality Business Awards 2026.",
      },
      {
        question: 'Is JC Brick & Blocklaying fully insured?',
        answer:
          "Yes. JC Brick & Blocklaying is fully insured on all projects, including residential, remedial, and structural work. Jamie Craig carries comprehensive insurance for all masonry work, giving clients in Melbourne's eastern suburbs complete confidence. Insurance details are available on request before any work begins.",
      },
      {
        question: 'Does Jamie Craig use subcontractors?',
        answer:
          "No. When JC Brick & Blocklaying quotes a job, Jamie Craig and his own team of qualified tradesmen and apprentices complete it. There is no subcontracting. Clients deal directly with Jamie from the first call through to the final clean-up. This is one of the most consistent pieces of feedback in JC Brick & Blocklaying's Google reviews. People appreciate knowing exactly who is on their property.",
      },
      {
        question: 'How many years of experience does JC Brick & Blocklaying have?',
        answer:
          "JC Brick & Blocklaying's principal, Jamie Craig, has 21 years of professional bricklaying experience. He began his trade at 15 and has since worked across residential, institutional, and commercial projects in Melbourne, including notable work at the Margaret Court Arena players' facility, Swinburne University, and Siena College in Camberwell.",
      },
    ],
  },
  {
    heading: 'Services',
    items: [
      {
        question: 'What bricklaying services does JC Brick & Blocklaying offer?',
        answer:
          'JC Brick & Blocklaying offers outdoor fireplaces and pizza ovens, block retaining and dividing walls, remedial brickwork and crack stitching, custom mortar matching, heritage brickwork restoration, feature walls and front fences, and architectural brick extensions. All services include full supply and install. JC Brick & Blocklaying does not take on new residential development builds or tuck pointing.',
      },
      {
        question: 'Does JC Brick & Blocklaying do new house brickwork?',
        answer:
          "Yes. JC Brick & Blocklaying takes on new house brickwork and architectural projects across Melbourne's eastern suburbs, alongside its core remedial, restoration and outdoor living work. Jamie Craig assesses each enquiry on its merits, so the scope and timing can be discussed when you get in touch. This gives clients the same quality and attention to detail on a new build that JC Brick & Blocklaying is known for on every other job.",
      },
      {
        question: 'Does JC Brick & Blocklaying offer heritage brickwork restoration?',
        answer:
          "Yes. Heritage brickwork restoration is a specialty of JC Brick & Blocklaying. Jamie Craig carries a 80-colour custom mortar range and has over two decades of experience matching and restoring brickwork on period homes across Melbourne's eastern and inner suburbs. He also provides crack stitching and dampcourse rectification on older homes where structural movement or moisture has caused damage.",
      },
    ],
  },
  {
    heading: 'Quotes & Pricing',
    items: [
      {
        question: 'How do I get a quote from JC Brick & Blocklaying?',
        answer:
          'To request a quote, fill in the enquiry form on the contact page or use the Click-to-Call button to ring Jamie directly. Jamie responds to all new enquiries within one business day. Once the project details are confirmed, a clear and itemised quote will be provided with no hidden costs and no obligation to proceed.',
      },
      {
        question: 'How quickly does JC Brick & Blocklaying respond to enquiries?',
        answer:
          'JC Brick & Blocklaying responds to all new enquiries within one business day. Jamie Craig reviews every new enquiry personally. For urgent jobs or quick turnaround assessments, using the Click-to-Call button during business hours is the fastest option. JC Brick & Blocklaying operates Monday to Friday, 7:00am to 5:30pm, and Saturday 9:00am to 3:00pm.',
      },
    ],
  },
  {
    heading: 'Service Areas',
    items: [
      {
        question: 'What suburbs does JC Brick & Blocklaying service?',
        answer:
          "JC Brick & Blocklaying services Melbourne's eastern and outer-eastern suburbs, including Croydon, Mooroolbark, Mount Evelyn, Ringwood, Ringwood North, Bayswater, Blackburn, Chirnside Park, Doncaster, Balwyn, Kilsyth, Lilydale, Mitcham, Vermont, Wantirna, Healesville, Warranwood, Boronia, Ferntree Gully, Knox, Scoresby, Croydon North, and Croydon Hills. Contact JC Brick & Blocklaying for enquiries from surrounding areas.",
      },
      {
        question: 'Is JC Brick & Blocklaying available in the Yarra Valley?',
        answer:
          'Yes. JC Brick & Blocklaying regularly works throughout the Yarra Valley, including Healesville, Lilydale, Chirnside Park, Mount Evelyn, and Warranwood. Outdoor fireplaces and entertaining structures are particularly popular in this area. Jamie is happy to quote for projects throughout the Yarra Valley region.',
      },
    ],
  },
  {
    heading: 'Custom Mortar Matching',
    items: [
      {
        question: 'What is custom mortar matching and why does it matter?',
        answer:
          'Custom mortar matching is the process of selecting and blending mortar to match the colour and texture of existing brickwork as closely as possible. It matters because unmatched mortar makes repairs and extensions immediately obvious, particularly on heritage and period homes. JC Brick & Blocklaying carries 80 custom mortar colours and uses on-site sampling to ensure an accurate match before any restoration or repair work is finalised.',
      },
      {
        question: 'Is custom mortar matching available on all JC Brick & Blocklaying projects?',
        answer:
          "Yes. Custom mortar matching is available across all JC Brick & Blocklaying services, including outdoor fireplaces, retaining walls, crack stitching, heritage restoration, and extensions. It is a standard part of JC Brick & Blocklaying's service offering, not an optional extra. Jamie Craig assesses the existing mortar on-site and uses his 80-colour range to identify the best match for each individual project.",
      },
      {
        question: 'Does JC Brick & Blocklaying have a 5-star Google rating?',
        answer:
          "Yes. JC Brick & Blocklaying holds a 5.0 star rating on Google with 15 reviews. Reviews can be read in full at JC Brick & Blocklaying's Google Business Profile. The consistent feedback across reviews highlights Jamie's communication, reliability, quality of finish, and his approachable manner on-site.",
      },
      {
        question: 'What award has JC Brick & Blocklaying received?',
        answer:
          "In 2026, JC Brick & Blocklaying was recognised in the top 1% of businesses in the Maroondah region by the Quality Business Awards. This recognition reflects the quality of work and client satisfaction that Jamie Craig and his team deliver consistently across Melbourne's eastern suburbs.",
      },
    ],
  },
]

const ALL_FAQS: FaqItem[] = FAQ_GROUPS.flatMap((g) => g.items)

export default function FAQPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs), faqPageSchema(ALL_FAQS)]} />

      {/* HERO */}
      <section className="grain-overlay relative isolate overflow-hidden bg-brand-dark">
        <HeroBg src="/images/hero/faq.jpg" priority />
        <Breadcrumbs crumbs={crumbs} />
        <div className="container-bpc relative pb-16 pt-8 md:pb-24 md:pt-10">
          <Reveal className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              Frequently Asked Questions: JC Brick &amp; Blocklaying Melbourne
            </h1>
            <p className="mt-5 text-lg text-white/80">
              Got a question about a bricklaying project in Melbourne&apos;s eastern suburbs? Below
              are the questions Jamie Craig hears most often. If yours isn&apos;t here, use the
              Click-to-Call button or the quote form and Jamie will get back to you within one business day.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FAQ GROUPS */}
      <section className="section-pad bg-white">
        <div className="container-bpc max-w-4xl space-y-12">
          {FAQ_GROUPS.map((group, gi) => (
            <Reveal key={group.heading} delay={(gi % 2) * 80}>
              <h2 className="text-xl font-semibold uppercase tracking-wide text-brand-orange">
                {group.heading}
              </h2>
              <div className="mt-5">
                <FAQAccordion items={group.items} />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <CTASection
        heading="Still Have a Question?"
        body="Use the Click-to-Call button or send through a quick enquiry and Jamie will get back to you within one business day."
      />
    </>
  )
}
