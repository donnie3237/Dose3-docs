export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div class="flex justify-center self-center flex-col w-[100%]">
        <hr class="bg-orange-700 w-[100%] h-[1px] mb-3"/>
        <p>&copy; {year} DOSE FROM ANOTHER PLANET</p>
    </div>
  )
}
