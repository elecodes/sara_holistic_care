import React, { useState } from 'react';
import { 
  Heart, 
  Sparkles, 
  Video, 
  Clock, 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  ChevronDown, 
  Menu, 
  X, 
  Globe2, 
  ArrowRight,
  Flame,
  Activity,
  Droplets,
  Mail
} from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Why is this consultation completely free?",
    answer: "I am in my final academic year of Naturopathy and Homeopathy in Quebec. To complete my clinical training and graduation requirements, I am fulfilling supervised first-aid case study hours. In exchange for your valuable time and participation in my clinical portfolio, the 60-minute intake session and follow-up are offered completely free of charge."
  },
  {
    question: "Do I need to buy anything, or will you sell me supplements?",
    answer: "No. I do not sell remedies, supplements, or test kits. Classical homeopathy uses single remedies (such as Arnica, Calendula, or Apis) that are widely available over-the-counter at standard Montreal pharmacies (Jean Coutu, Pharmaprix) and natural health food stores for roughly $7 to $12 per vial."
  },
  {
    question: "What if I am outside Montreal?",
    answer: "You are welcome to book! All consultations take place online via Microsoft Teams, so anyone across Quebec, Canada, or internationally with access to standard over-the-counter homeopathic remedies can participate in these educational sessions."
  },
  {
    question: "Can I participate if I am taking prescription medication?",
    answer: "Yes. Homeopathic micro-dilutions do not pharmacologically interfere with conventional allopathic pharmaceuticals. You should never alter or stop any prescription medication or medical advice from your physician."
  },
  {
    question: "How should I prepare for our 60-minute video call?",
    answer: "Find a quiet space with a stable connection. Think about the onset of your acute issue: when it started, the exact sensation (throbbing, burning, stinging, dull ache?), and what makes it feel slightly better or worse (cold compresses, warmth, rest, or movement)."
  }
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    language: 'English',
    timeSlot: 'Morning',
    symptoms: '',
    consent: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) return;
    setSubmitted(true);
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-[100dvh] bg-alabaster text-charcoal font-sans selection:bg-terracotta-tint selection:text-terracotta-dark flex flex-col">
      
      {/* 1. TOP PRACTICUM BANNER */}
      <aside aria-label="Clinical notice" className="bg-laurel text-alabaster px-4 py-3 text-sm font-medium text-center relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
          <span className="inline-flex items-center gap-1.5 bg-laurel-light text-alabaster px-3 py-1 rounded-full text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-300"></span>
            Montreal Practicum 2026
          </span>
          <span>Complimentary Acute First-Aid Consultations • Supporting clinical certification hours</span>
          <a href="#booking" className="underline underline-offset-4 font-semibold text-white hover:text-linen transition-colors">
            Book Free Slot &rarr;
          </a>
        </div>
      </aside>

      {/* 2. NAVIGATION BAR */}
      <header className="sticky top-0 z-40 bg-alabaster">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-linen flex items-center justify-center text-laurel group-hover:bg-sage-tint transition-colors">
              <Sparkles className="w-5 h-5 text-laurel" />
            </div>
            <div>
              <span className="font-serif text-xl font-bold tracking-tight text-laurel block leading-tight">
                Sara Homeopathy
              </span>
              <span className="text-xs font-medium text-driftwood block">
                Naturopathy &amp; Homeopathy Student Clinic
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-charcoal">
            <a href="#about" className="hover:text-laurel transition-colors">About Sara</a>
            <a href="#coverage" className="hover:text-laurel transition-colors">What We Cover</a>
            <a href="#how-it-works" className="hover:text-laurel transition-colors">How It Works</a>
            <a href="#faq" className="hover:text-laurel transition-colors">FAQ</a>
          </nav>

          <div className="hidden sm:flex items-center gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-linen text-xs font-semibold text-charcoal">
              <Globe2 className="w-4 h-4 text-laurel" />
              <span>English • Français • Español</span>
            </div>
            <a 
              href="#booking" 
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-laurel hover:bg-laurel-hover transform hover:-translate-y-0.5 transition-transform"
            >
              Book Free Session
            </a>
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-lg text-charcoal hover:bg-linen"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-linen px-4 pt-4 pb-6 space-y-3">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium text-charcoal hover:text-laurel">About Sara</a>
            <a href="#coverage" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium text-charcoal hover:text-laurel">What We Cover</a>
            <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium text-charcoal hover:text-laurel">How It Works</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium text-charcoal hover:text-laurel">FAQ</a>
            <div className="pt-3 flex items-center justify-between">
              <span className="text-xs font-semibold text-driftwood">Languages:</span>
              <span className="text-xs font-semibold bg-alabaster px-3 py-1 rounded-md text-charcoal">English • Français • Español</span>
            </div>
            <a 
              href="#booking" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block w-full text-center mt-3 py-3 rounded-xl bg-laurel text-white font-semibold text-sm"
            >
              Reserve Free 60-Min Call
            </a>
          </div>
        )}
      </header>

      {/* 3. HERO SECTION */}
      <section className="pt-12 pb-20 md:pt-20 md:pb-28 bg-alabaster">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-laurel leading-[1.12]">
                Gentle, Natural Relief for Everyday Recovery
              </h1>

              <p className="text-lg sm:text-xl text-charcoal font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Book a complimentary 60-minute student consultation in Homeopathic First Aid. Experience personalized, complementary support while helping me complete my final clinical practicum in Montreal.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a 
                  href="#booking" 
                  className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-full text-base font-semibold text-white bg-laurel hover:bg-laurel-hover transform hover:-translate-y-0.5 transition-transform gap-2 group"
                >
                  <span>Reserve Your Free 60-Min Call</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#coverage" 
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-full text-base font-semibold text-laurel bg-linen hover:bg-linen-dark transition-colors"
                >
                  Explore What Qualifies
                </a>
              </div>

              {/* Highlights */}
              <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                <div className="bg-linen p-4 rounded-2xl">
                  <div className="w-8 h-8 rounded-full bg-sage-tint text-laurel flex items-center justify-center mb-2">
                    <CheckCircle2 className="w-4 h-4 text-laurel" />
                  </div>
                  <h2 className="text-sm font-bold text-laurel leading-tight">100% Free &amp; No Upsells</h2>
                  <p className="text-xs text-driftwood mt-1">Fulfills clinical hours.</p>
                </div>

                <div className="bg-linen p-4 rounded-2xl">
                  <div className="w-8 h-8 rounded-full bg-terracotta-tint text-terracotta flex items-center justify-center mb-2">
                    <Video className="w-4 h-4 text-terracotta" />
                  </div>
                  <h2 className="text-sm font-bold text-laurel leading-tight">Microsoft Teams</h2>
                  <p className="text-xs text-driftwood mt-1">Live video from home.</p>
                </div>

                <div className="bg-linen p-4 rounded-2xl">
                  <div className="w-8 h-8 rounded-full bg-sage-tint text-laurel flex items-center justify-center mb-2">
                    <Droplets className="w-4 h-4 text-laurel" />
                  </div>
                  <h2 className="text-sm font-bold text-laurel leading-tight">Single-Remedy Focus</h2>
                  <p className="text-xs text-driftwood mt-1">Tailored classical care.</p>
                </div>
              </div>
            </div>

            {/* Right Card with Sara's Hero Photo */}
            <div className="lg:col-span-5">
              <div className="bg-linen rounded-3xl p-4 sm:p-5 space-y-4">
                
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-linen group">
                  <img 
                    src="assets/images/sarita_homeopathy.jpg" 
                    alt="Sara - Montreal Naturopathy & Homeopathy Student Practitioner" 
                    className="w-full h-full object-cover object-center transform group-hover:scale-102 transition-transform duration-500"
                    loading="eager"
                  />
                  
                  <div className="absolute top-3.5 left-3.5">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-laurel-dark bg-alabaster px-3 py-1 rounded-full">
                      <span className="w-2 h-2 rounded-full bg-laurel"></span>
                      Accepting Practicum Patients
                    </span>
                  </div>

                  <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-end justify-between text-alabaster">
                    <div className="bg-charcoal/80 px-3 py-1.5 rounded-xl">
                      <p className="font-serif text-base font-bold leading-tight text-white">Sara</p>
                      <p className="text-xs text-linen font-medium">Naturopathy &amp; Homeopathy Intern</p>
                    </div>
                    <span className="text-xs font-semibold bg-terracotta px-3 py-1.5 rounded-xl text-white">
                      Montreal, QC
                    </span>
                  </div>
                </div>

                <div className="bg-alabaster rounded-2xl p-4 space-y-2.5 text-xs text-charcoal">
                  <div className="flex justify-between">
                    <span className="font-medium text-driftwood">Format:</span>
                    <span className="font-semibold text-laurel">60-Min Video Call + 15-Min Check-in</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-driftwood">Fee:</span>
                    <span className="font-bold text-laurel bg-sage-tint px-2 py-0.5 rounded">$0.00 (Practicum Hours)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-driftwood">Languages:</span>
                    <span className="font-medium text-charcoal">English, Français, Español</span>
                  </div>
                </div>

                <div className="bg-terracotta-tint rounded-2xl p-4 text-charcoal text-xs sm:text-sm italic">
                  “First-aid homeopathy offers gentle relief for acute shocks, extractions, and healing tissues—aligning your body’s vitality without harsh side effects.”
                </div>

                <a 
                  href="#booking" 
                  className="w-full inline-flex items-center justify-center py-3.5 px-4 rounded-xl text-sm font-semibold text-white bg-laurel hover:bg-laurel-hover transition-colors gap-1.5 group"
                >
                  <span>Reserve Your Free 60-Min Call</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. ABOUT SARA */}
      <section id="about" className="py-20 bg-linen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-3xl bg-alabaster p-8">
                <div className="inline-block p-3 rounded-2xl bg-linen mb-4">
                  <Heart className="w-8 h-8 text-laurel" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-laurel">
                  Warm, Rigorous &amp; Patient-Centered Care
                </h2>
                <p className="text-sm text-charcoal mt-2 leading-relaxed">
                  "As a mother, I learned that true healing begins with deep listening and understanding the individual before rushing into one-size-fits-all fixes."
                </p>

                <div className="mt-6 pt-6 space-y-2">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-charcoal">Clinical Practicum Target</span>
                    <span className="text-laurel">Academic Year 2026</span>
                  </div>
                  <div className="w-full bg-linen-dark rounded-full h-2.5 overflow-hidden">
                    <div className="bg-laurel h-2.5 rounded-full w-3/4"></div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-linen rounded-lg text-xs font-semibold text-charcoal">
                    Spanish (Español)
                  </span>
                  <span className="px-3 py-1.5 bg-linen rounded-lg text-xs font-semibold text-charcoal">
                    English
                  </span>
                  <span className="px-3 py-1.5 bg-linen rounded-lg text-xs font-semibold text-charcoal">
                    Français
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-laurel leading-tight">
                A Personal Journey from Mexico to Montreal
              </h2>

              <div className="space-y-4 text-base text-charcoal leading-relaxed">
                <p>
                  Bonjour and hola! I’m Sara. Originally from Mexico, Montreal has been my home for years. As a mother of two growing children, my calling toward natural health was sparked right at our kitchen table—navigating childhood bumps, dental visits, sports sprains, and seasonal chills.
                </p>
                <p>
                  I am completing advanced professional certifications in Naturopathy and Classical Homeopathy at an accredited Quebec institute. Homeopathy fascinated me because it does not attempt to fight the body like an enemy; it offers gentle micro-stimuli that catalyze your system's natural vitality to recover rapidly.
                </p>
                <p>
                  <strong className="text-laurel">Why are these sessions free?</strong> To earn my clinical graduation credentials, I am required to complete real-world case studies under educational supervision. By reserving a consultation, you receive 100% focused, dedicated, and complimentary care, while directly helping me achieve my clinical degree.
                </p>
              </div>

              <div className="pt-2">
                <a href="#booking" className="inline-flex items-center text-sm font-semibold text-terracotta hover:text-terracotta-dark underline underline-offset-4 gap-1">
                  Schedule a conversation with Sara &rarr;
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. WHAT QUALIFIES AS FIRST AID HOMEOPATHY */}
      <section id="coverage" className="py-20 bg-alabaster">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-laurel tracking-tight">
              What Qualifies as Homeopathic First Aid?
            </h2>
            <p className="text-base sm:text-lg text-charcoal">
              First-aid (acute) homeopathy addresses short-term, self-limiting discomforts, physical impacts, or sudden ailments where the body benefits from a natural catalyst to accelerate recovery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            
            {/* Card 1 */}
            <div className="bg-linen rounded-3xl p-7 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-terracotta-tint text-terracotta flex items-center justify-center mb-6">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-laurel mb-3">
                  Physical Injuries &amp; Surgical Recovery
                </h3>
                <p className="text-sm text-driftwood mb-5 leading-relaxed">
                  Support your body’s tissue repair mechanisms after acute mechanical stress, impact, or post-dental and surgical procedures.
                </p>
                <ul className="space-y-2.5 text-xs sm:text-sm text-charcoal pt-2">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-terracotta mt-2 flex-shrink-0"></span>
                    <span><strong>Tooth extractions:</strong> Wisdom teeth, gum trauma, soreness.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-terracotta mt-2 flex-shrink-0"></span>
                    <span><strong>Minor burns & cuts:</strong> Kitchen scalds, abrasions, lacerations.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-terracotta mt-2 flex-shrink-0"></span>
                    <span><strong>Sprains & bruises:</strong> Twisted ankles, contusions, muscle strain.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 text-xs font-medium text-driftwood italic">
                Common remedies: Arnica, Hypericum, Calendula, Staphysagria.
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-linen rounded-3xl p-7 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-sage-tint text-laurel flex items-center justify-center mb-6">
                  <Flame className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-laurel mb-3">
                  Sudden Acute Onsets
                </h3>
                <p className="text-sm text-driftwood mb-5 leading-relaxed">
                  Rapid physical responses triggered by seasonal changes, insect stings, or mild digestive upsets.
                </p>
                <ul className="space-y-2.5 text-xs sm:text-sm text-charcoal pt-2">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-laurel mt-2 flex-shrink-0"></span>
                    <span><strong>Insect stings:</strong> Swelling, localized heat, puncture relief.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-laurel mt-2 flex-shrink-0"></span>
                    <span><strong>Mild food reactions:</strong> Sudden cramps, digestive distress.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-laurel mt-2 flex-shrink-0"></span>
                    <span><strong>Weather shifts:</strong> Rapid chills following cold Montreal drafts.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 text-xs font-medium text-driftwood italic">
                Common remedies: Apis, Ledum, Arsenicum album, Aconite.
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-linen rounded-3xl p-7 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-alabaster text-laurel flex items-center justify-center mb-6">
                  <Droplets className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-laurel mb-3">
                  Acute Side Effects &amp; Support
                </h3>
                <p className="text-sm text-driftwood mb-5 leading-relaxed">
                  Complementary comfort care to ease fatigue and discomfort following heavy treatments or seasonal malaise.
                </p>
                <ul className="space-y-2.5 text-xs sm:text-sm text-charcoal pt-2">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-charcoal mt-2 flex-shrink-0"></span>
                    <span><strong>Post-treatment fatigue:</strong> Nausea and tiredness support.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-charcoal mt-2 flex-shrink-0"></span>
                    <span><strong>Seasonal malaise:</strong> Heaviness, limb aches, sudden sluggishness.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-charcoal mt-2 flex-shrink-0"></span>
                    <span><strong>Eye irritations:</strong> Burning tears, redness, dry air sensitivity.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 text-xs font-medium text-driftwood italic">
                Common remedies: Nux vomica, Gelsemium, Euphrasia.
              </div>
            </div>

          </div>

          <!-- Emergency Notice -->
          <div className="bg-linen rounded-3xl p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <div className="w-12 h-12 rounded-2xl bg-terracotta-tint text-terracotta flex-shrink-0 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-terracotta bg-terracotta-tint px-2.5 py-0.5 rounded-md">
                    Essential Safety Notice
                  </span>
                  <span className="text-xs font-semibold text-laurel">Complementary Care Only</span>
                </div>
                <h4 className="font-serif text-lg font-bold text-laurel">
                  Homeopathy is never a substitute for urgent emergency medicine.
                </h4>
                <p className="text-sm text-charcoal leading-relaxed">
                  Homeopathic first aid is an individualized, gentle complementary modality designed to support healing alongside standard healthcare. If you or a family member is experiencing suspected fractures, intense chest pain, breathing difficulties, deep burns, or severe emergencies, please <strong>call 911 or head to the nearest Montreal hospital emergency room immediately</strong>.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. HOW IT WORKS */}
      <section id="how-it-works" className="py-20 bg-linen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-laurel tracking-tight">
              How Your Consultation Works
            </h2>
            <p className="text-base sm:text-lg text-charcoal">
              A transparent three-step journey providing clarity, support, and direct remedy guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-alabaster rounded-3xl p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-sage-tint text-laurel inline-block">
                  Initial Session
                </span>
                <h3 className="font-serif text-xl font-bold text-laurel">
                  60-Minute Intake Video Call
                </h3>
                <p className="text-sm text-charcoal leading-relaxed">
                  We meet online via Microsoft Teams to deeply explore your acute symptoms, modalities (what relieves or aggravates), and overall vitality.
                </p>
              </div>
              <div className="mt-8 pt-4 flex items-center gap-2 text-xs text-driftwood font-medium">
                <Clock className="w-4 h-4 text-laurel" />
                <span>Via Microsoft Teams (Link sent by email)</span>
              </div>
            </div>

            <div className="bg-alabaster rounded-3xl p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-terracotta-tint text-terracotta inline-block">
                  Individual Plan
                </span>
                <h3 className="font-serif text-xl font-bold text-laurel">
                  Personalized Remedy Guidance
                </h3>
                <p className="text-sm text-charcoal leading-relaxed">
                  You receive a written recommendation for a single homeopathic remedy, appropriate potency, and frequency—readily accessible at any local pharmacy.
                </p>
              </div>
              <div className="mt-8 pt-4 flex items-center gap-2 text-xs text-driftwood font-medium">
                <ShieldCheck className="w-4 h-4 text-terracotta" />
                <span>Accessible OTC at Jean Coutu, Pharmaprix, Tau</span>
              </div>
            </div>

            <div className="bg-alabaster rounded-3xl p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-sage-tint text-laurel inline-block">
                  Follow-Up &amp; Study
                </span>
                <h3 className="font-serif text-xl font-bold text-laurel">
                  15-Minute Follow-Up
                </h3>
                <p className="text-sm text-charcoal leading-relaxed">
                  A brief check-in 3 to 5 days later to track recovery, ensure relief, and finalize the case documentation for clinical evaluation.
                </p>
              </div>
              <div className="mt-8 pt-4 flex items-center gap-2 text-xs text-driftwood font-medium">
                <CheckCircle2 className="w-4 h-4 text-laurel" />
                <span>Ensures recovery and logs practicum hours</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 7. BOOKING & INTAKE SECTION */}
      <section id="booking" className="py-20 bg-alabaster">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-laurel tracking-tight">
              Schedule Your Free Consultation
            </h2>
            <p className="text-base sm:text-lg text-charcoal">
              Please share your acute details below. You will receive a calendar invite and your Microsoft Teams link.
            </p>
          </div>

          <div className="bg-linen rounded-3xl p-6 sm:p-10" data-ui="form">
            {submitted ? (
              <div className="text-center py-12 px-4 space-y-6">
                <div className="w-16 h-16 rounded-full bg-sage-tint text-laurel flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-laurel">
                    Your Free Session is Reserved!
                  </h3>
                  <p className="text-sm sm:text-base text-charcoal max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.fullName || 'friend'}! Sara has received your intake request and will send your private Microsoft Teams meeting link to <strong>{formData.email}</strong>.
                  </p>
                </div>
                <div className="bg-alabaster rounded-2xl p-5 max-w-md mx-auto text-left text-xs space-y-2.5 text-charcoal">
                  <div className="flex justify-between font-medium">
                    <span className="text-driftwood">Practicum Case ID:</span>
                    <span className="text-laurel font-bold">MTL-2026-8472</span>
                  </div>
                  <div className="flex justify-between font-medium">
                    <span className="text-driftwood">Consultation Fee:</span>
                    <span className="font-bold text-laurel">$0.00 (Student Practicum)</span>
                  </div>
                  <div className="flex justify-between font-medium">
                    <span className="text-driftwood">Preferred Time:</span>
                    <span>{formData.timeSlot}</span>
                  </div>
                </div>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-semibold text-terracotta hover:text-terracotta-dark underline underline-offset-4"
                >
                  Submit another request or edit details
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-charcoal mb-2">
                      Full Name <span className="text-terracotta">*</span>
                    </label>
                    <input 
                      type="text" 
                      name="fullName" 
                      required 
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g. Marie Tremblay" 
                      className="w-full px-4 py-3 rounded-xl bg-alabaster text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-laurel focus:bg-white transition-colors placeholder:text-driftwood-light border-0"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-charcoal mb-2">
                      Email Address <span className="text-terracotta">*</span>
                    </label>
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="marie@example.ca" 
                      className="w-full px-4 py-3 rounded-xl bg-alabaster text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-laurel focus:bg-white transition-colors placeholder:text-driftwood-light border-0"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-charcoal mb-2">
                      Phone Number (Optional)
                    </label>
                    <input 
                      type="tel" 
                      name="phone" 
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(514) 000-0000" 
                      className="w-full px-4 py-3 rounded-xl bg-alabaster text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-laurel focus:bg-white transition-colors placeholder:text-driftwood-light border-0"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-charcoal mb-2">
                      Preferred Language <span className="text-terracotta">*</span>
                    </label>
                    <select 
                      name="language" 
                      value={formData.language}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-alabaster text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-laurel focus:bg-white transition-colors border-0"
                    >
                      <option value="English">English</option>
                      <option value="Français">Français</option>
                      <option value="Español">Español</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-charcoal mb-2">
                    Preferred Time of Day <span className="text-terracotta">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {['Morning', 'Afternoon', 'Evening'].map((slot) => (
                      <label 
                        key={slot}
                        className={`flex items-center gap-3 p-3.5 rounded-xl cursor-pointer transition-colors ${
                          formData.timeSlot === slot ? 'bg-white text-laurel font-semibold' : 'bg-alabaster'
                        }`}
                      >
                        <input 
                          type="radio" 
                          name="timeSlot" 
                          value={slot} 
                          checked={formData.timeSlot === slot}
                          onChange={handleInputChange}
                          className="text-laurel focus:ring-laurel" 
                        />
                        <span className="text-xs sm:text-sm font-medium text-charcoal">
                          {slot === 'Morning' && 'Mornings (9am – 12pm)'}
                          {slot === 'Afternoon' && 'Afternoons (1pm – 5pm)'}
                          {slot === 'Evening' && 'Evenings (6pm – 8pm)'}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-charcoal mb-2">
                    Reason for Consultation / Current Acute Challenge <span className="text-terracotta">*</span>
                  </label>
                  <textarea 
                    name="symptoms" 
                    rows={4} 
                    required 
                    value={formData.symptoms}
                    onChange={handleInputChange}
                    placeholder="Describe what you are currently experiencing (e.g., 'Tooth extracted 2 days ago with throbbing pain', 'Twisted ankle on the ice', 'Sudden insect sting that is hot and swollen')..." 
                    className="w-full px-4 py-3 rounded-xl bg-alabaster text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-laurel focus:bg-white transition-colors leading-relaxed placeholder:text-driftwood-light border-0"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      name="consent" 
                      required 
                      checked={formData.consent}
                      onChange={handleInputChange}
                      className="mt-1 w-4 h-4 rounded text-laurel focus:ring-laurel"
                    />
                    <span className="text-xs sm:text-sm text-charcoal leading-snug">
                      I understand this is a <strong>student educational consultation</strong> and complementary care. I acknowledge that homeopathy does not replace emergency medical care (911 / ER).
                    </span>
                  </label>
                </div>

                <div className="pt-4">
                  <button 
                    type="submit" 
                    className="w-full py-4 px-6 rounded-2xl bg-laurel hover:bg-laurel-hover text-white font-semibold text-base transform hover:-translate-y-0.5 transition-transform flex items-center justify-center gap-2 group"
                  >
                    <span>Schedule Your Free Consultation</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                  <div className="mt-3 flex items-center justify-center gap-4 text-xs text-driftwood">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-laurel" />
                      Confidential &amp; Secure
                    </span>
                    <span>•</span>
                    <span>No Fee / Practicum Study</span>
                    <span>•</span>
                    <span>Montreal 2026</span>
                  </div>
                </div>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* 8. FAQ SECTION */}
      <section id="faq" className="py-20 bg-linen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-laurel tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-driftwood">
              Clear answers regarding student practicum sessions and remedy accessibility.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={index} className="rounded-2xl bg-alabaster overflow-hidden">
                  <button 
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="font-serif text-lg font-bold text-laurel">
                      {faq.question}
                    </span>
                    <span className={`w-8 h-8 rounded-full bg-linen flex items-center justify-center text-laurel flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 text-sm text-charcoal leading-relaxed pt-2">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="bg-laurel text-alabaster pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12">
            
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-laurel-light flex items-center justify-center text-alabaster">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span className="font-serif text-xl font-bold tracking-tight text-white">
                  Sara Homeopathy
                </span>
              </div>
              <p className="text-sm text-linen leading-relaxed max-w-sm">
                Student Clinical Practicum in Homeopathy &amp; Naturopathy. Dedicated to gentle, accessible first-aid recovery and natural vitality support across Montreal communities.
              </p>
              <div className="text-xs text-sage flex items-center gap-2">
                <span>Montreal (Tiohtià:ke), Quebec</span>
                <span>•</span>
                <span>Trilingual (English / Français / Español)</span>
              </div>
            </div>

            <div className="md:col-span-3 space-y-3">
              <h4 className="text-xs font-bold text-sage">
                Clinical Contact
              </h4>
              <p className="text-xs text-linen">
                Questions regarding practicum availability or case suitability?
              </p>
              <a href="mailto:sara.homeopathy.mtl@gmail.com" className="inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta-tint hover:text-white underline underline-offset-4 transition-colors">
                <Mail className="w-4 h-4" />
                sara.homeopathy.mtl@gmail.com
              </a>
              <p className="text-xs text-sage">
                Microsoft Teams links sent upon booking confirmation.
              </p>
            </div>

            <div className="md:col-span-4 space-y-3 bg-laurel-dark p-6 rounded-2xl">
              <h4 className="text-xs font-bold text-terracotta flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4" />
                Educational Practicum Notice
              </h4>
              <p className="text-xs text-linen leading-relaxed">
                Sara is a student intern fulfilling supervised clinical hours. Homeopathic consultations are complementary educational sessions and do not represent a medical diagnosis or emergency intervention under the Quebec Medical Act. In an acute emergency, please contact 911 immediately.
              </p>
            </div>

          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sage">
            <p>
              &copy; 2026 Sara Homeopathy. Supervised Clinical Practicum. All rights reserved.
            </p>
            <p className="text-sage">
              Rooted in the Montreal community with care and warmth
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
