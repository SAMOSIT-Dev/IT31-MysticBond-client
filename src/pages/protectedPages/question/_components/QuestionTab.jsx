import { useCallback, useEffect, useMemo, useState } from "react";
import { StepTabContent, useStep } from "../../../../components/Step";
import { cn } from "../../../../libs/utils/utils";
import {
  getPersonalityPercentage,
  mapChoiceToColor,
  personalityQuestions,
} from "../../../../libs/utils/personalityCalculation";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import Button from "../../../../components/ui/Button";

function QuestionContent({
  index = 0,
  title = "",
  choices = [],
  selectedValue = "",
  onSelected = (value) => {},
}) {
  const [selected, setSelected] = useState("");

  useEffect(() => {
    if (selectedValue) {
      setSelected(selectedValue);
    }
  }, [selectedValue]);

  const handleOnSelected = useCallback(
    (choice) => {
      if (choice !== selected) {
        setSelected(choice);
        onSelected(choice);
      }
    },
    [selected, onSelected]
  );

  return (
    <div className="max-w-200 mx-auto">
      <p>คำถามที่ {index + 1}</p>
      <p className="text-white text-2xl md:text-4xl leading-normal md:leading-12 mt-4 font-bold">{title}</p>
      <div className="space-y-4 mt-9 md:mt-14">
        {choices.map((choice) => (
          <button
            key={choice}
            data-selected={choice === selected}
            className={cn(
              "flex items-center space-x-3 px-3 py-3 bg-[#B7B7B770] rounded-xl w-full ease-in-out duration-400 outline-none transition-all",
              "data-[selected=true]:bg-white data-[selected=true]:text-black group",
              "focus:ring-4 ring-neutral-100/20",
              "text-sm md:text-base text-start"
            )}
            onClick={() => handleOnSelected(choice)}
          >
            <div
              className={cn(
                "size-5 p-2 rounded-full flex items-center justify-center border-2 border-[#CDCDCD]",
                "group-data-[selected=true]:border-[#7200FD] group-data-[selected=true]:bg-[#7200FD]"
              )}
            >
              <i className="opacity-0 group-data-[selected=true]:opacity-100 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="7"
                  viewBox="0 0 10 7"
                  fill="none"
                >
                  <path
                    d="M9 1L3.5 6L1 3.72727"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </i>
            </div>
            <p className="">{choice}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default function QuestionTab() {
  const [index, setIndex] = useState(0);
  const { setValue, updateStepItemState } = useStep();

  const [questions, setQuestions] = useState(() =>
    personalityQuestions.map((question) => ({
      ...question,
      selected: "",
    }))
  );

  const updateSelected = useCallback(
    (selected) => {
      setQuestions((prev) =>
        prev.map((q, i) => (i === index ? { ...q, selected } : q))
      );
    },
    [index]
  );

  const isComplete = useMemo(() => {
    return (
      Array.isArray(questions) &&
      questions.every(({ selected }) => !!selected?.length)
    );
  }, [questions]);

  const getQuestion = useMemo(() => {
    const length = questions.length;
    return questions[index > length ? 0 : index];
  }, [index]);

  const handleOnSelected = (choice) => {
    updateSelected(choice);
  };

  const next = () => {
    if (index < questions.length - 1) {
      setIndex((prev) => prev + 1);
    }
  };

  const previous = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    const selecteds = questions.map((question) => question.selected);
    const percentage = getPersonalityPercentage(selecteds);

    setValue("result");
    updateStepItemState("question", { activated: true });

    console.log(percentage);
  };

  return (
    <StepTabContent value="question">
      <div className="flex flex-col">
        <div className="mt-8">
          <QuestionContent
            index={index}
            title={getQuestion.title}
            choices={getQuestion.choices}
            selectedValue={getQuestion.selected}
            onSelected={handleOnSelected}
          />
        </div>
        <div className="mx-auto flex items-center mt-14 space-x-5">
          <div className="inline-flex space-x-3">
            <button
              disabled={index < 1}
              className={cn(
                "size-14 rounded-full border-2 border-white flex p-2 justify-center items-center cursor-pointer text-white",
                "disabled:border-[#9B9B9B] disabled:text-[#9B9B9B]"
              )}
              onClick={previous}
            >
              <ChevronLeft size={50} className="right-px relative"/>
            </button>
            <button
              disabled={index === personalityQuestions.length - 1}
              className={cn(
                "size-14 rounded-full border-2 border-white flex p-2 justify-center items-center cursor-pointer text-white",
                "disabled:border-[#9B9B9B] disabled:text-[#9B9B9B]"
              )}
              onClick={next}
            >
              <ChevronRight size={50} className="left-px relative" />
            </button>
          </div>
          <Button
            disabled={!isComplete}
            className="w-40"
            onClick={handleSubmit}
          >
            เสร็จสิ้น
          </Button>
        </div>
      </div>
    </StepTabContent>
  );
}
