import BOOK_PROP from "../assets/images/Prop2_3x.webp";

export default function Loading() {
  return (
    <div className="flex flex-col justify-center mx-auto max-w-100 animate-pulse">
      <img src={BOOK_PROP} />
    </div>
  );
}
