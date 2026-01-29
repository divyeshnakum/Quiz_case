// QuizModal.jsx
import React, { useState } from "react";
import rupeeIcon from "../../assets/icons/icon-rupee.png";
import {
  borderColor,
  bgCartColor,
  bgColor,
  baseColorYel,
  hoverColorYel,
  textColPrimary,
  textColSecondary,
  TextGray,
  textLabelColor,
  GreenSuccessCol,
} from "../../components/ColorLayout";

const difficulties = ["Easy", "Moderate", "Hard"];
const quizAttempts = ["One Time", "Multiple"];
const steps = [
  { id: 1, title: "Basic Details" },
  { id: 2, title: "Add Question" },
  { id: 3, title: "Important Information" },
];

const QuizPages = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const [basicDetails, setBasicDetails] = useState({
    title: "",
    category: "",
    difficulty: "Easy",
  });
  const [questions, setQuestions] = useState([
    { question: "", options: ["", "", "", ""], correct: "A" },
  ]);
  const [importantInfo, setImportantInfo] = useState({
    duration: 30,
    attempt: "One Time",
    prize: 50,
    status: "Publish",
    schedule: "",
  });

  const bgHoverColor = "hover:bg-[#F8F8F8]";

  const handleNext = () => setStep((prev) => Math.min(prev + 1, 3));
  const handlePrev = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleQuestionChange = (index, field, value) => {
    const newQuestions = [...questions];
    if (field === "question") {
      newQuestions[index].question = value;
    } else if (field.startsWith("option")) {
      const optIndex = parseInt(field.slice(-1));
      newQuestions[index].options[optIndex] = value;
    } else if (field === "correct") {
      newQuestions[index].correct = value;
    }
    setQuestions(newQuestions);
  };

  const addQuestion = () =>
    setQuestions([
      ...questions,
      { question: "", options: ["", "", "", ""], correct: "A" },
    ]);

  const handleSubmit = () => {
    const quizData = { basicDetails, questions, importantInfo };
    console.log("Quiz Data:", quizData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* overlay (NO bg-opacity) */}
      <div className="absolute inset-0 bg-transparent " />

      <div
        className={`absolute  inset-0 z-50 flex items-center justify-center p-2 sm:p-4`}
      >
        <div
          className={`w-full sm:w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 ${bgCartColor} rounded-2xl border ${borderColor} p-4 sm:p-6 relative overflow-y-auto max-h-[90vh]`}
        >
          <button
            className={`absolute top-3 sm:top-4 right-3 sm:right-4 ${TextGray} cursor-pointer text-xl`}
            onClick={onClose}
          >
            &times;
          </button>

          {/* Step Indicator */}
          <h2
            className={`text-lg sm:text-xl font-semibold mb-2 ${textColPrimary}`}
          >
            Create New Quiz
          </h2>
          <h2 className={`${textLabelColor} mb-2 text-sm sm:text-base`}>
            Step {step} of {steps.length} : {steps[step - 1].title}
          </h2>
          <div className={`w-full ${bgColor} h-1 rounded mb-4 sm:mb-6`}>
            <div
              className={`h-1 ${baseColorYel} rounded transition-all`}
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
          <div>
            <h2
              className={`${textColPrimary} border-b pb-2 ${borderColor} font-semibold mb-2 text-sm sm:text-base`}
            >
              {steps[step - 1].title}
            </h2>
          </div>

          <div className={`px-1 sm:px-2 border-b ${borderColor} `}>
            {/* Step 1: Basic Details */}
            {step === 1 && (
              <div>
                <label
                  className={` ${textLabelColor} block mb-2 text-xs sm:text-sm`}
                >
                  Quiz Title
                </label>
                <input
                  type="text"
                  placeholder="e.g. Coding logic round"
                  value={basicDetails.title}
                  onChange={(e) =>
                    setBasicDetails({ ...basicDetails, title: e.target.value })
                  }
                  className={`w-full border rounded-2xl py-2 px-3 sm:py-2 sm:px-4 mb-4 ${borderColor} text-sm sm:text-base ${TextGray}`}
                />

                <label
                  className={` ${textLabelColor} block mb-2 text-xs sm:text-sm`}
                >
                  Category
                </label>
                <select
                  value={basicDetails.category}
                  onChange={(e) =>
                    setBasicDetails({
                      ...basicDetails,
                      category: e.target.value,
                    })
                  }
                  className={`w-full border rounded-2xl py-2 px-3 sm:py-2 sm:px-4 mb-4 ${borderColor} ${TextGray}  ${bgCartColor} text-sm sm:text-base focus:text-black`}
                >
                  <option value="" disabled hidden>
                    Select a category
                  </option>
                  <option value="Coding">Coding</option>
                  <option value="General Knowledge">General Knowledge</option>
                  <option value="Math">Math</option>
                </select>

                <label
                  className={` ${textLabelColor} block mb-2 text-xs sm:text-sm`}
                >
                  Difficulty Level
                </label>
                <div className="flex flex-col  sm:flex-row items-center justify-between gap-1  sm:gap-4 mb-4 sm:mb-5">
                  {difficulties.map((level) => (
                    <button
                      key={level}
                      onClick={() =>
                        setBasicDetails({ ...basicDetails, difficulty: level })
                      }
                      className={`w-full py-2 ${textColSecondary} rounded-2xl cursor-pointer text-sm sm:text-base ${
                        basicDetails.difficulty === level
                          ? `${baseColorYel} `
                          : `${bgColor}`
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Questions */}
            {step === 2 && (
              <div className="p-1 sm:p-2 mb-3">
                {questions.map((q, idx) => (
                  <div key={idx} className="mb-4">
                    <div className="mb-3 sm:mb-4">
                      <label
                        className={` ${textLabelColor} block mb-2 text-xs sm:text-sm`}
                      >
                        Question {idx + 1}
                      </label>
                      <input
                        type="text"
                        value={q.question}
                        onChange={(e) =>
                          handleQuestionChange(idx, "question", e.target.value)
                        }
                        placeholder="Enter your question here"
                        className={`w-full border rounded-2xl py-2 px-3 sm:py-2 sm:px-4 mb-2 ${TextGray} ${borderColor} text-sm sm:text-base`}
                      />
                    </div>
                    <div>
                      <label
                        className={` ${textLabelColor} block mb-2 text-xs sm:text-sm`}
                      >
                        Options & Correct Answer
                      </label>

                      {["A", "B", "C", "D"].map((opt, i) => (
                        <div
                          key={i}
                          className={`${TextGray} flex flex-col sm:flex-row items-center mb-2 gap-2 sm:gap-2`}
                        >
                          <input
                            type="radio"
                            name={`correct-${idx}`}
                            checked={q.correct === opt}
                            onChange={() =>
                              handleQuestionChange(idx, "correct", opt)
                            }
                            className="accent-black"
                          />
                          <input
                            type="text"
                            value={q.options[i]}
                            onChange={(e) =>
                              handleQuestionChange(
                                idx,
                                `option${i}`,
                                e.target.value,
                              )
                            }
                            placeholder={`Option ${opt}`}
                            className={`w-full border rounded-2xl ${borderColor} p-2 text-sm sm:text-base`}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                <button
                  onClick={addQuestion}
                  className={`cursor-pointer w-full border border-dashed py-2 rounded-2xl ${textColSecondary} ${bgColor} text-sm sm:text-base`}
                >
                  + Add Another Question
                </button>
              </div>
            )}

            {/* Step 3: Important Info */}
            {step === 3 && (
              <div>
                <div className="mb-2">
                  {/* Header */}
                  <div className=" py-2">
                    <h2 className={` ${textColSecondary} text-xs sm:text-sm`}>
                      Rules & Regulations
                    </h2>
                  </div>
                  <div
                    className={`border ${borderColor} rounded-2xl ${bgCartColor}`}
                  >
                    {/* Content */}
                    <div
                      className={`px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm ${TextGray} space-y-1`}
                    >
                      <div className="flex">
                        <span className="mr-2 sm:mr-3">e.g.</span>
                        <span>1. Answer quickly to earn more points</span>
                      </div>
                      <div className="pl-6 sm:pl-8">
                        2. You cannot go back to previous questions
                      </div>
                      <div className="pl-6 sm:pl-8">
                        3. Once submitted, answers cannot be changed
                      </div>
                      <div className="pl-6 sm:pl-8">
                        4. Internet disconnection may auto-submit
                      </div>
                      <div className="pl-6 sm:pl-8">
                        5. Rewards will be added after result declaration
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-2 sm:gap-4">
                  <div className="w-full sm:w-1/2">
                    <label
                      className={` ${textLabelColor} block mb-2 text-xs sm:text-sm text-left`}
                    >
                      Time Duration (minutes)
                    </label>
                    <input
                      type="number"
                      value={importantInfo.duration}
                      onChange={(e) =>
                        setImportantInfo({
                          ...importantInfo,
                          duration: e.target.value,
                        })
                      }
                      className={`w-full border ${borderColor} ${textColSecondary} rounded-2xl py-2 text-center mb-4 text-sm sm:text-base`}
                    />
                  </div>
                  <div className="w-full sm:w-1/2">
                    <label
                      className={` ${textLabelColor} block mb-2 text-xs sm:text-sm`}
                    >
                      Quiz Attempt Allowed
                    </label>
                    <select
                      value={importantInfo.attempt}
                      onChange={(e) =>
                        setImportantInfo({
                          ...importantInfo,
                          attempt: e.target.value,
                        })
                      }
                      className={`w-full border ${borderColor} ${textColSecondary} rounded-2xl py-2 text-center mb-4 text-sm sm:text-base`}
                    >
                      {quizAttempts.map((a) => (
                        <option key={a} value={a}>
                          {a}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <label
                  className={` ${textLabelColor} block mb-2 text-xs sm:text-sm`}
                >
                  Winner Amount
                </label>
                <div className={`relative w-full mb-4 ${textColSecondary}`}>
                  {/* Input */}
                  <span className={`absolute left-4 top-1/2 -translate-y-1/2 text-xl`}>₹</span>
                  <input
                    type="number"
                    value={importantInfo.prize}
                    onChange={(e) =>
                      setImportantInfo({
                        ...importantInfo,
                        prize: e.target.value,
                      })
                    }
                    className={`
      w-full border ${borderColor} 
      rounded-2xl
      py-2 sm:py-3
      pl-7 sm:pl-10
      text-left text-sm sm:text-base
    `}
                    placeholder="Enter amount"
                  />
                </div>

                <div className="mb-4">
                  <p
                    className={` ${textLabelColor} block mb-2 text-xs sm:text-sm`}
                  >
                    Quiz Status
                  </p>

                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {["Publish", "Draft", "Schedule"].map((status) => {
                      const isActive = importantInfo.status === status;

                      return (
                        <button
                          key={status}
                          onClick={() =>
                            setImportantInfo({ ...importantInfo, status })
                          }
                          className={`
            flex items-center gap-2
            px-3 sm:px-4 py-1 sm:py-2
            border rounded-full
            text-xs sm:text-sm
            transition ${textColSecondary}
            ${isActive ? `${borderColor}` : `${borderColor}`}
          `}
                        >
                          {/* Radio Circle */}
                          <span
                            className={`
              w-3 h-3 sm:w-4 sm:h-4 rounded-full border
              flex items-center justify-center
              ${isActive ? `${borderColor}` : `${borderColor}`}
            `}
                          >
                            {isActive && (
                              <span
                                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${bgColor}`}
                              ></span>
                            )}
                          </span>

                          {status}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {importantInfo.status === "Schedule" && (
                  <input
                    type="datetime-local"
                    value={importantInfo.schedule}
                    onChange={(e) =>
                      setImportantInfo({
                        ...importantInfo,
                        schedule: e.target.value,
                      })
                    }
                    className={`w-full border ${borderColor} ${textColSecondary} rounded-2xl py-2 sm:py-3 text-center mb-4 text-sm sm:text-base px-3 sm:px-4`}
                  />
                )}
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row justify-between mt-4 gap-2 sm:gap-4">
            {step === 1 && (
              <button
                onClick={onClose}
                className={`cursor-pointer py-2 sm:py-3 sm:w-28 md:w-36 lg:w-40 border rounded-2xl ${textColSecondary} ${borderColor} text-sm sm:text-base`}
              >
                Cancel
              </button>
            )}
            {step > 1 && (
              <button
                onClick={handlePrev}
                className={`cursor-pointer py-2 sm:py-3 sm:w-28 md:w-36 lg:w-40 border rounded-2xl ${textColSecondary} ${borderColor} text-sm sm:text-base`}
              >
                Previous
              </button>
            )}
            {step < 3 ? (
              <button
                onClick={handleNext}
                className={`cursor-pointer sm:w-28 md:w-36 lg:w-40 ${textColSecondary} ${baseColorYel} ${hoverColorYel} border ${borderColor} rounded-2xl py-2 sm:py-3 text-sm sm:text-base`}
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className={`cursor-pointer py-2 sm:py-3 sm:w-28 md:w-36 lg:w-40 ${GreenSuccessCol} ${textColSecondary} rounded-lg text-sm sm:text-base`}
              >
                Save
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default QuizPages;
