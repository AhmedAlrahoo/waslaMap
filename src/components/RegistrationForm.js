import React, { useEffect } from "react";
import database from "../firebase.js";
import uuid from "react-uuid";
import { useForm } from "react-hook-form";

function RegistrationForm({
  showLocSubmit,
  setShowLocSubmit,
  submittedLatLng,
  setSubmitionDone,
}) {
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
    setValue,
  } = useForm();
  useEffect(() => {
    if (submittedLatLng) {
      console.log("submittttedd", submittedLatLng);
      setValue("location", submittedLatLng);
      clearErrors("location");
    }
  }, [submittedLatLng]);

  const handleAddress = () => {
    var el = document.getElementById("scrollAid");
    el.scrollIntoView({ behavior: "smooth" });
    setShowLocSubmit(true);
  };
  const submit = (values) => {
    values.lat = submittedLatLng.lat;
    values.lng = submittedLatLng.lng;
    delete values.location
    // navigator.geolocation.getCurrentPosition(
    //   function (position) {
    //     values.lat = position.coords.latitude;
    //     values.lng = position.coords.longitude;
    //   },
    //   function (error) {
    //     values.lat = 0
    //     values.lng = 0
    //   }
    // );
    // database.ref().on("value", snapshot => {
    //   let studentlist = [];
    //   snapshot.forEach(snap => {
    //       // snap.val() is the dictionary with all your keys/values from the 'students-list' path
    //       studentlist.push(snap.val());
    //   });
    //   setStudents(studentlist);
    // });
    // console.log(students);

    database.ref(`${uuid()}`).set(values).catch(alert);
    setSubmitionDone(true);
    setShowLocSubmit(false);
  };
  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="w-full max-w-lg"
      style={{ direction: "rtl" }}
    >
      <h1 className="text-4xl mt-3 mb-10 w-full text-center">التسجيل</h1>
      <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            قبل ما تبدي بالتسجيل نحب نعرف من وين سمعت عنا ؟
            <span className=" text-gray-300 text-xs mx-1">(اختياري)</span>
          </label>
          <div className="mt-2">
            <div>
              <label className="inline-flex items-center">
                <input
                  {...register("howDidYouKnow")}
                  type="radio"
                  className="form-radio"
                  name="howDidYouKnow"
                  value="فيسبوك"
                />
                <span className="ml-2">فيسبوك</span>
              </label>
            </div>
            <div>
              <label className="inline-flex items-center">
                <input
                  {...register("howDidYouKnow")}
                  type="radio"
                  className="form-radio"
                  name="howDidYouKnow"
                  value="انستكرام"
                />
                <span className="ml-2">انستكرام</span>
              </label>
            </div>
            <div>
              <label className="inline-flex items-center">
                <input
                  {...register("howDidYouKnow")}
                  type="radio"
                  className="form-radio"
                  name="howDidYouKnow"
                  value="المحطة"
                />
                <span className="ml-2">المحطة</span>
              </label>
            </div>
            <div>
              <label className="inline-flex items-center">
                <input
                  {...register("howDidYouKnow")}
                  type="radio"
                  className="form-radio"
                  name="howDidYouKnow"
                  value="صديق او احد المعارف"
                />
                <span className="ml-2">صديق او احد المعارف</span>
              </label>
            </div>
            <div>
              <label className="inline-flex items-center">
                <input
                  {...register("howDidYouKnow")}
                  type="radio"
                  className="form-radio"
                  name="howDidYouKnow"
                  value="وسائل اخرى"
                />
                <span className="ml-2">وسائل اخرى</span>
              </label>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            الاسم الثلاثي
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:bg-white"
            id="grid-first-name"
            type="text"
            {...register("fullName", {
              required: "يرجى ادخال الاسم",
              maxLength: { value: 30 },
            })}
          />
          {errors.fullName && (
            <p className="text-red-500 text-xs italic">يرجى ملئ هذا الحقل</p>
          )}
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-last-name"
          >
            تاريخ الميلاد
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            name="birthdate"
            {...register("birthDate", { required: "يرجى ادخال تاريخ الميلاد" })}
          />
          {errors.birthDate && (
            <p className="text-red-500 text-xs italic">يرجى ملئ هذا الحقل</p>
          )}
        </div>

        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-last-name"
          >
            الجنس
          </label>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full px-3">
              <div className="flex items-baseline">
                <div className="mt-2 flex">
                  <div className="mx-2">
                    <label className="inline-flex items-center">
                      <input
                        {...register("gender", {
                          required: "يرجى ادخال الجنس",
                        })}
                        type="radio"
                        className="form-radio"
                        name="gender"
                        value="انثى"
                      />
                      <span className="mr-2 text-lg">انثى</span>
                    </label>
                  </div>
                  <div className="mx-2">
                    <label className="inline-flex items-center">
                      <input
                        {...register("gender", {
                          required: "يرجى ادخال الجنس",
                        })}
                        type="radio"
                        className="form-radio"
                        name="gender"
                        value="ذكر"
                      />
                      <span className="mr-2 text-lg">ذكر</span>
                    </label>
                  </div>
                </div>
              </div>
              {errors.gender && (
                <p className="text-red-500 text-xs italic">يرجى الاختيار</p>
              )}
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            رقم الموبايل
          </label>
          <input
            {...register("number", { required: "يرجى ادخال رقم الهاتف" })}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="number"
          />
          {errors.number && (
            <p className="text-red-500 text-xs italic">يرجى ملئ هذا الحقل</p>
          )}
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            رقم مبايل ثاني للاحتياط{" "}
            <span className=" text-gray-300 text-xs mx-1">(اختياري)</span>
          </label>
          <input
            {...register("secondNumber")}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="number"
          />
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            رقم مبايل احد الوالدين{" "}
            <span className=" text-gray-300 text-xs mx-1">(اختياري)</span>
          </label>
          <input
            {...register("parentNumber")}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="number"
          />
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0" id="scrollAid4">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-last-name"
          >
           عنوان السكن (الجانب)
          </label>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full px-3">
              <div className="flex items-baseline">
                <div className="mt-2 flex">
                  <div className="mx-2">
                    <label className="inline-flex items-center">
                      <input
                        {...register("side", {
                          required: "يرجى ادخال الجانب",
                        })}
                        type="radio"
                        className="form-radio"
                        name="side"
                        value="ايسر"
                      />
                      <span className="mr-2 text-lg">ايسر</span>
                    </label>
                  </div>
                  <div className="mx-2">
                    <label className="inline-flex items-center">
                      <input
                        {...register("side", {
                          required: "يرجى ادخال الجنس",
                        })}
                        type="radio"
                        className="form-radio"
                        name="side"
                        value="ايمن"
                      />
                      <span className="mr-2 text-lg">ايمن</span>
                    </label>
                  </div>
                </div>
              </div>
              {errors.side && (
                <p className="text-red-500 text-xs italic">يرجى الاختيار</p>
              )}
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            اسم منطقة السكن
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:bg-white"
            id="grid-first-name"
            type="text"
            {...register("area", {
              required: "يرجى ادخال العنوان ",
              maxLength: { value: 25 },
            })}
          />
          {errors.area && (
            <p className="text-red-500 text-xs italic">يرجى ملئ هذا الحقل</p>
          )}
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-state"
          >
            العنوان
          </label>
          <button
            {...register("location", { required: "يرجى تحديد العنوان" })}
            type="button"
            value={submittedLatLng}
            onClick={handleAddress}
            
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight active:bg-white"
          >
            {submittedLatLng ? "تغيير العنوان" : "تحديد العنوان من الخريطة"}
          </button>
          {showLocSubmit && submittedLatLng ? <p>تم تحديد عنوانك بنجاح</p> : ""}
          {errors.location && (
            <p className="text-red-500 text-xs italic">يرجى تحديد العنوان</p>
          )}
        </div>

        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-state"
          >
            الجامعة
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 mb-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
              {...register("university", { required: "يرجى ادخال الجامعة" })}
            >
              <option value="" disabled selected>
                اختر جامعتك
              </option>
              <option value="جامعة الموصل">جامعة الموصل</option>
              <option value="جامعة الموصل المجمع الثاني">
                جامعة الموصل المجمع الثاني
              </option>
              <option value="جامعة نينوى">جامعة نينوى</option>
              <option value="الكلية التقنية">الكلية التقنية</option>
              <option value="المعهد التقني">المعهد التقني</option>
            </select>
            {errors.university && (
              <p className="text-red-500 text-xs italic">يرجى الاختيار</p>
            )}
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            القسم والكلية
          </label>
          <input
            {...register("college", { required: "يرجى ادخال القسم" })}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
          />
          {errors.college && (
            <p className="text-red-500 text-xs italic">يرجى ملئ هذا الحقل</p>
          )}
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-state"
          >
            المرحلة
          </label>
          <div className="relative">
            <select
              {...register("year", { required: "يرجى ادخال المرحلة" })}
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 mb-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
            >
              <option value="">اختر مرحلتك</option>
              <option value="الاولى">الاولى</option>
              <option value="الثانية">الثانية</option>
              <option value="الثالثة">الثالثة</option>
              <option value="الرابعة">الرابعة</option>
              <option value="الخامسة">الخامسة</option>
              <option value="االسادسة">السادسة</option>
              <option value="دراسات عليا">دراسات عليا</option>
            </select>
            {errors.year && (
              <p className="text-red-500 text-xs italic">يرجى ملئ هذا الحقل</p>
            )}
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-state"
          >
            اختار اقرب بوابة لقسمك
          </label>
          <div className="relative">
            <select
              {...register("gate", { required: "يرجى ادخال البوابة" })}
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 mb-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
            >
              <option value="">اختر بوابتك</option>
              <option value="بوابة الملعب">بوابة الملعب</option>
              <option value="بوابة الرئاسة">بوابة الرئاسة</option>
              <option value="بوابة الصناعة">بوابة الصناعة</option>
              <option value="بوابة العلوم">بوابة العلوم</option>
              <option value="بوابة الطب العام">بوابة الطب العام</option>
              <option value="بوابة طب الاسنان">بوابة طب الاسنان</option>
              <option value="بوابة الكلية التقنية الهندسية">
                بوابة الكلية التقنية الهندسية
              </option>
              <option value="بوابة المعهد التقني">بوابة المعهد التقني</option>
              <option value="بوابة المعهد الخلفية">بوابة المعهد الخلفية</option>
              <option value="مجمع ثاني">مجمع ثاني</option>
            </select>
            {errors.gate && (
              <p className="text-red-500 text-xs italic">يرجى الاختيار</p>
            )}
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-last-name"
          >
            نوع الدوام
          </label>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full px-3">
              <div className="flex items-baseline">
                <div className="mt-2 flex">
                  <div className="mx-2">
                    <label className="inline-flex items-center">
                      <input
                        {...register("type", {
                          required: "يرجى ادخال نوع الدوام",
                        })}
                        type="radio"
                        className="form-radio"
                        name="type"
                        value="صباحي"
                      />
                      <span className="mr-2 text-lg">صباحي</span>
                    </label>
                  </div>
                  <div className="mx-2">
                    <label className="inline-flex items-center">
                      <input
                        {...register("type", {
                          required: "يرجى ادخال الجنس",
                        })}
                        type="radio"
                        className="form-radio"
                        name="type"
                        value="مسائي"
                      />
                      <span className="mr-2 text-lg">مسائي</span>
                    </label>
                  </div>
                </div>
              </div>
              {errors.type && (
                <p className="text-red-500 text-xs italic">يرجى الاختيار</p>
              )}
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-state"
          >
            وقت انتهاء الدوام (بشكل تقريبي)
          </label>
          <input
            className="p-3 bg-gray-200 rounded"
            type="time"
            id="appt"
            name="appt"
            {...register("endTime", { required: "يرجى ادخال الوقت" })}
          />
          {errors.endTime && (
            <p className="text-red-500 text-xs italic">يرجى الاختيار</p>
          )}
        </div>

        
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            معرف التلكرام ( للتواصل ){" "}
            <span className=" text-gray-300 text-xs mx-1">(اختياري)</span>
          </label>
          <input
            {...register("telegram")}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
          />
        </div>

        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            وبالختام اكتبولنا اسم اغنيتكم المفضلة
            <span role="img" aria-label="hearts" className="font-sans font-normal text-current">
              &#128525;&#129505;
            </span>
            <span className=" text-gray-300 text-xs mx-1">(اختياري)</span>
          </label>
          <input
            {...register("favoriteSong")}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
          />
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            اي ملاحظات ؟{" "}
            <span className=" text-gray-300 text-xs mx-1">(اختياري)</span>
          </label>
          <input
            {...register("notes")}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
          />
        </div>
        
        <button
          type="submit"
          className="w-1/3 p-2 mx-auto mb-4 bg-primary rounded-lg text-white text-xl text-bold"
        >
          تثبيت
        </button>
      </div>
    </form>
  );
}

export default RegistrationForm;
