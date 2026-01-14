import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-10 px-4 pb-16 pt-10 sm:px-6">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s talk about your exam goals"
        subtitle="Reach out for partnerships, learner support, or a walkthrough of this Parikshe recreation."
      />

      <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
        <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm">
          <div className="space-y-4 text-sm text-slate-700">
            <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
              <div>
                <div className="text-sm font-semibold text-slate-900">Phone</div>
                <div className="text-xs text-slate-500">Mon–Sat, 9am to 7pm IST</div>
              </div>
              <a className="text-sm font-semibold text-blue-700" href="tel:+919066640205">
                +91 90666 40205
              </a>
            </div>
            <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
              <div>
                <div className="text-sm font-semibold text-slate-900">Email</div>
                <div className="text-xs text-slate-500">We reply within one business day.</div>
              </div>
              <a className="text-sm font-semibold text-blue-700" href="mailto:contact@parikshe.in">
                contact@parikshe.in
              </a>
            </div>
            <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
              <div>
                <div className="text-sm font-semibold text-slate-900">Support</div>
                <div className="text-xs text-slate-500">Chat or WhatsApp for enrolled learners.</div>
              </div>
              <a className="text-sm font-semibold text-blue-700" href="https://wa.me/919066640205" target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
