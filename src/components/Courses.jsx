
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  GraduationCap,
  Stethoscope,
  Calculator,
  Landmark,
  ArrowRight,
  MessageCircle,
  Atom,
  Brain,
  X,
  FileText,
  ClipboardCheck,
  BookMarked,
  ChevronRight,
} from "lucide-react";

const WHATSAPP_NUMBER = "919477110367";

const courses = [
  {
    title: "Foundation Classes",
    subtitle: "Classes 5–8",
    icon: BookOpen,
    color: "blue",
    description: "Build strong fundamentals and improve academic performance.",
    subjects: ["Mathematics", "Science", "English"],
    syllabus: [
      "Mathematics: Numbers, fractions, algebra and geometry",
      "Science: Basic physics, chemistry and biology",
      "English: Grammar, vocabulary and comprehension",
    ],
    materials: [
      { title: "Mathematics Revision Notes", detail: "Important concepts and formulas" },
      { title: "Science Chapter Notes", detail: "Topic summaries and key definitions" },
      { title: "Practice Worksheet", detail: "Questions for daily practice" },
    ],
    questions: [
      {
        q: "What is 25% of 200?",
        options: ["25", "40", "50", "75"],
        answer: 2,
      },
      {
        q: "Which organ pumps blood around the body?",
        options: ["Lungs", "Heart", "Kidney", "Brain"],
        answer: 1,
      },
    ],
  },
  {
    title: "Board Preparation",
    subtitle: "Classes 9–10",
    icon: GraduationCap,
    color: "violet",
    description: "Revise important concepts and practise examination-style questions.",
    subjects: ["Mathematics", "Science", "English"],
    syllabus: [
      "Mathematics: Algebra, geometry, trigonometry and statistics",
      "Science: Physics, chemistry and biology fundamentals",
      "English: Grammar, writing and reading comprehension",
    ],
    materials: [
      { title: "Mathematics Formula Sheet", detail: "Quick revision of key formulas" },
      { title: "Science Revision Notes", detail: "Important concepts by topic" },
      { title: "Board Practice Questions", detail: "Exam-style questions for revision" },
    ],
    questions: [
      {
        q: "What is the value of sin 30°?",
        options: ["0", "1/2", "√3/2", "1"],
        answer: 1,
      },
      {
        q: "What is the chemical formula of water?",
        options: ["CO₂", "O₂", "H₂O", "NaCl"],
        answer: 2,
      },
    ],
  },
  {
    title: "Senior Classes",
    subtitle: "Classes 11–12",
    icon: Atom,
    color: "emerald",
    description: "Strengthen higher-secondary concepts with focused revision.",
    subjects: ["Physics", "Chemistry", "Mathematics"],
    syllabus: [
      "Physics: Mechanics, electricity and modern physics",
      "Chemistry: Physical, organic and inorganic chemistry",
      "Mathematics: Calculus, algebra and coordinate geometry",
    ],
    materials: [
      { title: "Physics Formula Notes", detail: "Key formulas and definitions" },
      { title: "Chemistry Revision Guide", detail: "Core concepts and reactions" },
      { title: "Mathematics Practice Set", detail: "Topic-wise practice questions" },
    ],
    questions: [
      {
        q: "What is the SI unit of force?",
        options: ["Joule", "Watt", "Newton", "Pascal"],
        answer: 2,
      },
      {
        q: "What is the derivative of x²?",
        options: ["x", "2x", "x²", "2"],
        answer: 1,
      },
    ],
  },
  {
    title: "NEET Preparation",
    subtitle: "Medical Entrance",
    icon: Stethoscope,
    color: "rose",
    description: "Prepare for medical entrance examinations through concept revision and MCQs.",
    subjects: ["Physics", "Chemistry", "Biology"],
    syllabus: [
      "Physics: Mechanics, thermodynamics and electricity",
      "Chemistry: Physical, organic and inorganic chemistry",
      "Biology: Cell biology, genetics, ecology and human physiology",
    ],
    materials: [
      { title: "Biology Revision Notes", detail: "Key definitions and diagrams to revise" },
      { title: "Physics Formula Sheet", detail: "Important formulas for problem-solving" },
      { title: "NEET-Style MCQs", detail: "Sample multiple-choice practice" },
    ],
    questions: [
      {
        q: "Which organelle produces most cellular ATP?",
        options: ["Ribosome", "Mitochondrion", "Golgi apparatus", "Nucleus"],
        answer: 1,
      },
      {
        q: "What is the basic unit of heredity?",
        options: ["Cell", "Tissue", "Gene", "Organ"],
        answer: 2,
      },
    ],
  },
  {
    title: "JEE Preparation",
    subtitle: "Engineering Entrance",
    icon: Calculator,
    color: "orange",
    description: "Build problem-solving skills for engineering entrance examinations.",
    subjects: ["Physics", "Chemistry", "Mathematics"],
    syllabus: [
      "Physics: Mechanics, waves, electricity and magnetism",
      "Chemistry: Chemical bonding, equilibrium and organic chemistry",
      "Mathematics: Calculus, algebra, vectors and coordinate geometry",
    ],
    materials: [
      { title: "Physics Formula Notes", detail: "Quick reference for problem-solving" },
      { title: "Chemistry Concept Guide", detail: "Core topics for revision" },
      { title: "JEE-Style MCQs", detail: "Sample entrance-exam questions" },
    ],
    questions: [
      {
        q: "What is the derivative of sin x?",
        options: ["cos x", "-cos x", "tan x", "-sin x"],
        answer: 0,
      },
      {
        q: "What is the SI unit of electric charge?",
        options: ["Ampere", "Coulomb", "Volt", "Ohm"],
        answer: 1,
      },
    ],
  },
  {
    title: "Government Exam Preparation",
    subtitle: "Competitive Exams",
    icon: Landmark,
    color: "indigo",
    description: "Practise aptitude, reasoning and general awareness for competitive exams.",
    subjects: ["Quantitative Aptitude", "Reasoning", "General Knowledge"],
    syllabus: [
      "Quantitative Aptitude: Percentages, ratios and averages",
      "Reasoning: Series, coding-decoding and logical problems",
      "General Awareness: History, geography and civics",
    ],
    materials: [
      { title: "Quantitative Aptitude Notes", detail: "Essential formulas and examples" },
      { title: "Reasoning Practice Sheet", detail: "Logical reasoning exercises" },
      { title: "General Awareness Revision", detail: "Topics to review regularly" },
    ],
    questions: [
      {
        q: "What is the average of 10, 20 and 30?",
        options: ["15", "20", "25", "30"],
        answer: 1,
      },
      {
        q: "Which is the largest planet in our solar system?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: 2,
      },
    ],
  },
];

const styles = {
  blue: "bg-blue-100 text-blue-700",
  violet: "bg-violet-100 text-violet-700",
  emerald: "bg-emerald-100 text-emerald-700",
  rose: "bg-rose-100 text-rose-700",
  orange: "bg-orange-100 text-orange-700",
  indigo: "bg-indigo-100 text-indigo-700",
};

export default function Courses() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const openCourse = (course) => {
    setSelectedCourse(course);
    setActiveTab("overview");
    setAnswers({});
    setSubmitted(false);
  };

  const closeCourse = () => setSelectedCourse(null);

  const enquiryLink = (courseName) => {
    const message = `Hello Bright Future Coaching, I would like to know more about ${courseName}. Please share the syllabus, study materials and admission details.`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="courses" className="bg-slate-50 px-5 py-20 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700">
            <GraduationCap size={18} /> Our Courses
          </span>

          <h2 className="mt-5 text-3xl font-extrabold text-slate-900 sm:text-5xl">
            Learn Today.{" "}
            <span className="text-blue-600">Lead Tomorrow.</span>
          </h2>

          <p className="mt-4 text-slate-600">
            Explore courses, review study resources and practise sample questions.
            Click any course to get started.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => {
            const Icon = course.icon;

            return (
              <motion.button
                key={course.title}
                type="button"
                onClick={() => openCourse(course)}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-sm transition hover:border-blue-300 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <div className="flex w-full items-center justify-between">
                  <span className={`flex h-14 w-14 items-center justify-center rounded-2xl ${styles[course.color]}`}>
                    <Icon size={28} />
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                    {course.subtitle}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-extrabold text-slate-900">
                  {course.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                  {course.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {course.subjects.map((subject) => (
                    <span
                      key={subject}
                      className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs text-slate-700"
                    >
                      {subject}
                    </span>
                  ))}
                </div>

                <span className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 font-bold text-blue-600">
                  Explore Course <ArrowRight size={18} className="transition group-hover:translate-x-1" />
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedCourse && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 p-3 backdrop-blur-sm sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCourse}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={`${selectedCourse.title} details`}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              onClick={(event) => event.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
            >
              <div className="bg-slate-900 p-6 text-white sm:p-8">
                <button
                  type="button"
                  onClick={closeCourse}
                  aria-label="Close course details"
                  className="absolute right-4 top-4 rounded-full bg-white/10 p-2 hover:bg-white/20"
                >
                  <X size={21} />
                </button>

                <span className={`inline-flex rounded-xl p-3 ${styles[selectedCourse.color]}`}>
                  {(() => {
                    const Icon = selectedCourse.icon;
                    return <Icon size={28} />;
                  })()}
                </span>

                <p className="mt-4 text-sm font-semibold text-blue-300">
                  {selectedCourse.subtitle}
                </p>
                <h3 className="mt-2 pr-8 text-2xl font-extrabold sm:text-3xl">
                  {selectedCourse.title}
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">
                  {selectedCourse.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 border-b border-slate-200 px-4 py-4 sm:px-7">
                {[
                  { id: "overview", label: "Course Details", icon: BookOpen },
                  { id: "materials", label: "Study Materials", icon: FileText },
                  { id: "practice", label: "Practice Quiz", icon: ClipboardCheck },
                ].map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => {
                        setActiveTab(tab.id);
                        setSubmitted(false);
                      }}
                      className={`inline-flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-bold transition sm:px-4 ${
                        activeTab === tab.id
                          ? "bg-blue-600 text-white"
                          : "bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-700"
                      }`}
                    >
                      <Icon size={17} /> {tab.label}
                    </button>
                  );
                })}
              </div>

              <div className="p-5 sm:p-8">
                {activeTab === "overview" && (
                  <div>
                    <h4 className="text-lg font-extrabold text-slate-900">
                      Subjects & Syllabus
                    </h4>
                    <ul className="mt-4 space-y-3">
                      {selectedCourse.syllabus.map((topic) => (
                        <li key={topic} className="flex gap-3 text-sm leading-6 text-slate-700">
                          <ChevronRight className="mt-0.5 shrink-0 text-blue-600" size={18} />
                          {topic}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 rounded-2xl bg-blue-50 p-4">
                      <p className="font-bold text-blue-900">What you can access</p>
                      <p className="mt-1 text-sm leading-6 text-blue-800">
                        Topic summaries, revision notes and sample quiz questions.
                        Contact the coaching centre for the complete syllabus and
                        available classroom materials.
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === "materials" && (
                  <div>
                    <h4 className="text-lg font-extrabold text-slate-900">
                      Study Materials
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Select a resource to request the corresponding material from
                      Bright Future Coaching on WhatsApp.
                    </p>

                    <div className="mt-5 space-y-3">
                      {selectedCourse.materials.map((material) => (
                        <a
                          key={material.title}
                          href={enquiryLink(`${selectedCourse.title} — ${material.title}`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-4 rounded-2xl border border-slate-200 p-4 transition hover:border-blue-300 hover:bg-blue-50"
                        >
                          <span className="rounded-xl bg-blue-100 p-3 text-blue-700">
                            <BookMarked size={22} />
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="block font-bold text-slate-900">
                              {material.title}
                            </span>
                            <span className="mt-1 block text-sm text-slate-600">
                              {material.detail}
                            </span>
                          </span>
                          <ArrowRight size={19} className="shrink-0 text-blue-600" />
                        </a>
                      ))}
                    </div>

                    <p className="mt-4 text-xs leading-5 text-slate-500">
                      These are resource request links, not downloadable files.
                      Upload your actual PDF notes to make direct downloads available.
                    </p>
                  </div>
                )}

                {activeTab === "practice" && (
                  <div>
                    <h4 className="text-lg font-extrabold text-slate-900">
                      Sample Practice Quiz
                    </h4>
                    <p className="mt-2 text-sm text-slate-600">
                      Choose one answer for each question, then check your score.
                    </p>

                    <div className="mt-5 space-y-6">
                      {selectedCourse.questions.map((question, questionIndex) => (
                        <div key={question.q} className="rounded-2xl border border-slate-200 p-4">
                          <p className="font-bold text-slate-900">
                            {questionIndex + 1}. {question.q}
                          </p>
                          <div className="mt-3 grid gap-2 sm:grid-cols-2">
                            {question.options.map((option, optionIndex) => {
                              const isSelected = answers[questionIndex] === optionIndex;
                              const isCorrect = question.answer === optionIndex;

                              let optionStyle = "border-slate-200 hover:bg-slate-50";
                              if (isSelected) optionStyle = "border-blue-500 bg-blue-50";
                              if (submitted && isCorrect) optionStyle = "border-emerald-500 bg-emerald-50 text-emerald-800";
                              if (submitted && isSelected && !isCorrect) optionStyle = "border-rose-400 bg-rose-50 text-rose-800";

                              return (
                                <button
                                  key={option}
                                  type="button"
                                  disabled={submitted}
                                  onClick={() => setAnswers((previous) => ({
                                    ...previous,
                                    [questionIndex]: optionIndex,
                                  }))}
                                  className={`rounded-xl border p-3 text-left text-sm transition ${optionStyle}`}
                                >
                                  {String.fromCharCode(65 + optionIndex)}. {option}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>

                    {submitted && (
                      <p className="mt-5 rounded-xl bg-slate-100 p-4 font-bold text-slate-800">
                        Your score:{" "}
                        {selectedCourse.questions.filter(
                          (question, index) => answers[index] === question.answer
                        ).length}{" "}
                        / {selectedCourse.questions.length}
                      </p>
                    )}

                    <button
                      type="button"
                      onClick={() => {
                        if (submitted) {
                          setAnswers({});
                          setSubmitted(false);
                        } else {
                          setSubmitted(true);
                        }
                      }}
                      disabled={!submitted && Object.keys(answers).length !== selectedCourse.questions.length}
                      className="mt-5 rounded-xl bg-blue-600 px-5 py-3 font-bold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      {submitted ? "Try Again" : "Check Answers"}
                    </button>
                  </div>
                )}

                <a
                  href={enquiryLink(selectedCourse.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3.5 font-bold text-white transition hover:bg-emerald-700"
                >
                  <MessageCircle size={19} />
                  Enquire on WhatsApp
                  <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
