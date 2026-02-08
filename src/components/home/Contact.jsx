import style from "./home.module.css"
export default function Contact() {
  return (
    <section className='bg-black py-5'>
      <div className='d-flex justify-content-center align-items-center'>
        <div className='d-flex justify-content-center align-items-center flex-column gap-4 bg-dark bg-opacity-75 p-3 p-md-5 rounded-4'>
          <div className={`${style.btnPrimary} p-3 rounded-4`}>
            <i className="fa-regular fa-envelope fa-xl"></i>
          </div>
          <h2 className='fw-bold m-0'>اشنرك في <span className='text-warning'>نشرتنا الإخبارية</span></h2>
          <p className='text-dark-emphasis m-0'>احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني</p>
          <form className='w-100 d-flex gap-3 flex-column flex-lg-row'>
            <input placeholder="أدخل بريدك الإلكتروني" className='form-control-lg d-inline-block flex-grow-1 bg-black text-white bg-opacity-50 border-dark shadow-none border-0' type="email" name='email' />
            <button type="submit" className={`${style.btnPrimary} btn btn-primary text-nowrap py-3 px-4 fw-bold border-0`}>اشترك الاَن</button>
          </form>
          <div className="d-flex flex-wrap justify-content-center align-items-center gap-4 w-100">
            <div className="text-dark-emphasis fa-xs">
              <img className="rounded-circle" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face" alt="avatar1" />
              <img className="rounded-circle ms-2" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face" alt="avatar2" />
              <img className="rounded-circle" src="	https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" alt="avatar3" />
            </div>
            <p className="text-dark-emphasis fa-xs m-0">انضم ل <span className="text-white fw-bold">+10,000</span> مصور</p>
            <p className="text-dark-emphasis fa-xs m-0">بدون إزعاج</p>
            <p className="text-dark-emphasis fa-xs m-0">إلغاء الاشتراك في أي وقت</p>
          </div>
        </div>
      </div>
    </section>
  )
}
