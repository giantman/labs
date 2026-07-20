export default function Profile() {
  return (
    <main className="pt-[84px] px-4 pb-6">
      <div className="grid grid-cols-2 gap-x-[25px] py-6">
        <div />
        <div>
          <p className="text-base font-medium text-[#1a1917]/50 leading-[1.5]">
            Robert Manukyan is a Los Angeles based designer leading experience design at Altruist. His work spans product design, brand, and design engineering.
          </p>
          <img
            src="/profile/robert.jpeg"
            alt="Robert Manukyan"
            className="block mt-6"
            style={{ width: '50%', height: 'auto' }}
          />
        </div>
      </div>
    </main>
  )
}
