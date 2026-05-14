export default function ProfileCard() {
  return (
    <div className="rounded-[2rem] border border-blue-100 bg-blue-950 p-6 text-white shadow-sm">
      <div className="rounded-full bg-white/10 px-3 py-1.5 text-[11px] font-black">
        Founder Profile
      </div>

      <h2 className="mt-5 text-3xl font-black leading-tight">
        Aung Phone Myat
      </h2>

      <div className="mt-4 space-y-3 text-sm leading-6 text-blue-100">
        <p className="font-semibold">
          B.Eng (Electrical Power Engineering), WYTU
        </p>

        <p className="font-black text-white">
          Full Stack Developer
        </p>

        <p>
          Airport Building Services and Automation Engineer
        </p>

        <p>
          Executive Diploma in Building Services
        </p>

        <p>
          Executive Chairman · Innovaverse Group Co., Ltd.
        </p>
      </div>

      <div className="mt-5 rounded-2xl bg-white/10 p-4 text-[11px] leading-5 text-blue-50">
        <p>aungphonemyatwytu@gmail.com</p>
        <p>+95 9 425 096 424</p>
        <p>+95 9 772 806 376</p>
      </div>
    </div>
  );
}
