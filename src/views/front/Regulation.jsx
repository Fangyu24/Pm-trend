import paymentIcon from '../../assets/images/payment.svg'
import calendarIcon from '../../assets/images/calendar-icon.svg'
import welfareIcon from '../../assets/images/welfare.svg'
import dropdownQuestionOne from '../../assets/images/dropdown-question-01.png'
import { useState } from 'react'
const Regulation = () => {
    const [isOpen, setIsOpen] = useState(null);
    const [shippingOpen, setShippingOpen] = useState(null);
    const [productsOpen, setProductsOpen] = useState(null);
    // 用 useState 管理資料
    const [RegulationData] = useState({
        leave: [
            {
                question: "特休、病假、生理假",
                answer: {
                    intro: "請假三天以內，請向組長請假，三天以上，需向Joey請假；請假時需填寫該表，請組長核准後通知姿琪，姿琪會覆核有無確實登記，以利計算薪資。",
                    items: [
                        {
                            title: "病假",
                            details: ["依勞基法規定，病假扣半薪，並需附上醫療相關證明，可以後補請，但仍需通知組長。"]
                        },
                        {
                            title: "生理假",
                            details: ["生理假無需提供證明"]
                        },
                    ]
                }
            },
            {
                question: "颱風假",
                answer: {
                    intro: "颱風假期間不扣薪，僅需完成手上工作即可下班",
                }
            },
            {
                question: "運動假",
                answer: {
                    intro: "運動假屬於鼓勵性福利，不具備可折換薪資的性質，未休完也不能折現；運動假的休假前提要建立在完成手上工作，如果是提出離職後要休運動假也需要完成份內工作才能使用權益，不可當作特休一次在離職前使用。",
                    items: [
                        {
                            title: "使用對象",
                            details: ["通過三個月試用期者可享運動假福利"]
                        },
                        {
                            title: "使用方式",
                            details: ["請自行填寫運動證明，若無法提供實際的運動時數，請在運動前與運動後各拍一張照片，並能看得出起訖時間，作為申請依據。"]
                        },
                        {
                            title: "累積方式",
                            details: ["運動2小時換0.5天休假，運動4小時換1 天休假。"]
                        },
                        {
                            title: "注意事項",
                            details: ["運動假性質與特休不同"]
                        },
                    ]
                }
            }
        ],
        payment: [
            {
                question: "代墊請款制度",
                answer: {
                    intro: "請於每月20號前向姿琪申請完成代墊款項的請款",
                    items: [
                        {
                            title: "步驟ㄧ：發票開立：",
                            details: ["發票統編請開立為：90046359；若無法開立統編發票，請務必提供收據或其他相關證明文件。"]
                        },
                        {
                            title: "步驟二：私訊請款",
                            details: ["可先私訊姿琪拍照提供或是20號前寄送紙本。"]
                        },
                        {
                            title: "步驟三：註明請款事項",
                            details: ["需提供明細註明案件用途，例如：樂事拍攝、Citycafe拍攝、樂事順豐運費等。"]
                        },
                        {
                            title: "步驟四：紙本資料寄出",
                            details: ["請務必於請款後2個月內將紙本資料寄出，以利後續稅務申報作業。"]
                        },
                        {
                            title: "步驟五：匯款時間",
                            details: ["將與當月薪資一併於月底最後一個工作天匯款。"]
                        },
                    ]
                }
            },
            {
                question: "紙本資料寄送地址",
                answer: {
                    intro: "(麻煩寄普通掛號)",
                    items: [
                        {
                            title: "地址",
                            details: ["202 基隆市中正區中正路676號3樓之3"]
                        },
                        {
                            title: "電話",
                            details: ["0986-510-150"]
                        },
                        {
                            title: "收件人",
                            details: ["李姿琪收"]
                        }
                    ]
                }
            },
        ],
        welfare: [
            {
                question: "三節禮盒/推薦獎金/員工健檢",
                answer: {
                    intro: "細項說明：",
                    items: [
                        {
                            title: "三節禮盒",
                            details: ["三節期間都會提供節慶禮盒"]
                        },
                        {
                            title: "推薦獎金",
                            details: ["推薦新進人員且通過試用期，推薦者可獲得獎金5千。"]
                        },
                        {
                            title: "員工健檢",
                            details: ["每年健檢，滿一年全額補助，與公司年中聚餐同一天進行"]
                        },

                    ]
                }
            },
            {
                question: "加班補助誤餐費",
                answer: {
                    intro: "說明如下，與薪資一起匯款",
                    items: [
                        {
                            title: "平日加班",
                            details: ["兩小時可補助150"]
                        },
                        {
                            title: "週六加班",
                            details: ["四小時可補助150"]
                        },
                        {
                            title: "週日及國定假日",
                            details: ["不加班，若有特殊情況需加班請先跟91討論"]
                        },
                    ]
                }
            },
            {
                question: "員工旅遊",
                answer: {
                    intro: "細項說明：",
                    items: [
                        {
                            title: "KPI",
                            details: ["今年營業額做4000萬就辦國外旅遊"]
                        },
                        {
                            title: "適用對象",
                            details: ["滿一年員工補助全額，滿半年補助一半"]
                        },
                        {
                            title: "計算方式",
                            details: ["今年年初入職到今年年底為滿一年"]
                        },
                    ]
                }
            },
        ]
    });

    const toggleOpen = (index) => {
        setIsOpen(isOpen === index ? null : index);
    };

    const toggleShippingOpen = (index) => {
        setShippingOpen(shippingOpen === index ? null : index);
    };

    const toggleProductsOpen = (index) => {
        setProductsOpen(productsOpen === index ? null : index);
    };

    return (
        <>
            <main className="bg-gray-50 mt-md-10 mt-8 py-lg-10 py-5">
                <section>
                    <div className="container">
                        <div className="text-center pb-lg-11 pb-7">
                            <h2 className="h2 fw-bold answer-font">員工福利及規範</h2>
                        </div>
                        <div className="row pb-100">

                            <div className="col-lg-4 col-12 mb-5">
                                <div className="text-center pb-3">
                                    <p className="text-center px-5 py-14 fs-8 bg-white rounded-2 mb-3 text-gray-950">
                                        生日禮金/生日假
                                    </p>
                                    <div className="bg-secondary rounded-2 fs-8 px-5 pt-5 pb-51">
                                        <p className="lh-base text-gray-950">1.生日禮金為1000元</p>
                                        <p className="lh-base text-gray-950">2.生日假一天 (可任意使用不限當月也可以折換薪資)</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-12 mb-5">
                                <div className="text-center pb-3">
                                    <p className="text-center px-5 py-14 fs-8 bg-white rounded-2 mb-3 text-gray-950">勞健保員工自付額\團保</p>
                                    <div className="bg-secondary rounded-2 fs-8 px-5 pt-5 pb-51">
                                        <p className="lh-base text-gray-950">1.入職滿半年享有團保</p>
                                        <p className="lh-base text-gray-950">2.公司全額負擔勞健保</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-12">
                                <div className="text-center pb-3">
                                    <p className="text-center px-5 py-14 fs-8 bg-white rounded-2 mb-3 text-gray-950">藝文娛樂補助</p>
                                    <div className="bg-secondary rounded-2 fs-8 px-5 pt-5 pb-51">
                                        <p className="lh-base text-gray-950">1.通過三個月試用期者可享藝文補助福利</p>
                                        <p className="lh-base text-gray-950">2.每月600，一年 600*12 = 7,200 可累積使用</p>
                                        <p className="lh-base text-gray-950">3.有發票者需要打統編，無發票者需提供收據或相關證明</p>
                                        <p className="lh-base text-gray-950">4.有不確定的項目請事先詢問過Joey或姿琪</p>
                                        <p className="lh-base text-gray-950">5.向姿琪申請，於申請當月和薪資一起匯款</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <figure className="overflow-hidden">
                        </figure>
                    </div>
                </section>

                <section>
                    <div className="container">
                        <div
                            className="row justify-content-center justify-content-lg-between flex-column flex-lg-row mt-11 mb-5"
                        >
                            <div className="col-lg-3 col-12">
                                <ul className="nav nav-underline gap-1 flex-column" role="tablist">
                                    <li
                                        className="nav-item dashed-to-solid text-lg-start text-center mb-lg-0 mb-4"
                                        role="presentation"
                                    >
                                        <button
                                            className="border-0 active bg-gray-50 text-color text-font lh-base"
                                            id="home-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#home-pane"
                                            type="button"
                                            role="tab"
                                            aria-controls="home-pane"
                                            aria-selected="true"
                                        >
                                            <span className="me-2"
                                            ><img
                                                    src={calendarIcon}
                                                    alt="fqa-payment-icon" /></span>請假制度
                                        </button>
                                    </li>
                                    <li
                                        className="nav-item dashed-to-solid text-lg-start text-center d-lg-block d-none"
                                        role="presentation"
                                    >
                                        <button
                                            className="border-0 bg-gray-50 text-color text-font lh-base"
                                            id="profile-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#profile-pane"
                                            type="button"
                                            role="tab"
                                            aria-controls="profile-pane"
                                            aria-selected="false"
                                        >
                                            <span className="me-2 drop-icon"
                                            ><img
                                                    src={paymentIcon}
                                                    alt="payment-icon" /></span>代墊款制度
                                        </button>
                                    </li>
                                    <li
                                        className="nav-item dashed-to-solid text-lg-start text-center d-lg-block d-none mb-lg-0 mb-3"
                                        role="presentation"
                                    >
                                        <button
                                            className="border-0 bg-gray-50 text-color text-font lh-base"
                                            id="contact-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#contact-pane"
                                            type="button"
                                            role="tab"
                                            aria-controls="contact-pane"
                                            aria-selected="false"
                                        >
                                            <span className="me-2 drop-icon"
                                            ><img
                                                    src={welfareIcon}
                                                    alt="fqaGiftIcon" /></span>其他福利
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            {/* 桌面版 */}
                            <div className="tab-content col-12 col-lg-8">
                                <div
                                    className="tab-pane fade show active"
                                    id="home-pane"
                                    role="tabpanel"
                                    aria-labelledby="home-tab"
                                    tabIndex={0}>
                                    <div className="dropdown dropdown-push w-100 mb-5">
                                        {RegulationData.leave?.map((item, index) => {
                                            return (
                                                <div className="d-flex gap-3 mb-4" key={index}>
                                                    {/* 左側圖示 */}
                                                    <div className="d-lg-block d-none">
                                                        <img
                                                            src={dropdownQuestionOne}
                                                            alt="dropdown-question-01"
                                                        />
                                                    </div>

                                                    <div className="flex-grow-1">
                                                        <button
                                                            className="btn btn-white d-flex justify-content-between w-100 dropdown-toggle-custom mb-3 px-5 py-14 text-primary-hover fs-8"
                                                            type="button"
                                                            onClick={() => toggleOpen(index)}
                                                        >
                                                            {item.question}
                                                            <span>
                                                                <img
                                                                    className="toggle-icon"
                                                                    src={isOpen === index
                                                                        ? 'https://raw.githubusercontent.com/Fury51/img-base/0b8aa0769c819eab32b2865fa834b99de9f1ae25/%E5%9C%96%E5%BA%AB/faq-minus.svg'
                                                                        : 'https://raw.githubusercontent.com/Fury51/img-base/0b8aa0769c819eab32b2865fa834b99de9f1ae25/%E5%9C%96%E5%BA%AB/faq-plus.svg'}
                                                                    alt=""
                                                                />
                                                            </span>
                                                        </button>

                                                        {/* 根據 isOpen 狀態顯示 */}
                                                        {isOpen === index && (
                                                            <div className="dropdown-menu-custom w-100 border-0 p-5 bg-secondary mb-4 show">
                                                                {/* 渲染 intro 文字 */}
                                                                <p className="fs-8 fw-bold">{item.answer.intro}</p>

                                                                <ol className="add-decimal w-100 fs-8 mb-0">
                                                                    {/* 渲染 answer 裡面的 items 陣列 */}
                                                                    {item.answer.items?.map((subItem, subIndex) => (
                                                                        <li key={subIndex} className="mb-3">
                                                                            <span className="fw-bold">{subItem.title}</span>
                                                                            <ul className="add-disc">
                                                                                {/* 渲染每一個 item 裡面的 details 陣列 */}
                                                                                {subItem.details?.map((detail, dIndex) => (
                                                                                    <li key={dIndex}>{detail}</li>
                                                                                ))}
                                                                            </ul>
                                                                        </li>
                                                                    ))}
                                                                </ol>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                <div
                                    className="tab-pane fade"
                                    id="profile-pane"
                                    role="tabpanel"
                                    aria-labelledby="profile-tab"
                                    tabIndex={0}
                                >
                                    <div className="dropdown dropdown-push w-100 mb-5">
                                        {RegulationData.payment?.map((item, index) => {
                                            return (
                                                <div className="d-flex gap-3 mb-4" key={index}>
                                                    {/* 左側圖示 */}
                                                    <div className="d-lg-block d-none">
                                                        <img
                                                            src={dropdownQuestionOne}
                                                            alt="dropdown-question-01"
                                                        />
                                                    </div>

                                                    <div className="flex-grow-1">
                                                        {/* 問題按鈕：文字要改為 item.question */}
                                                        <button
                                                            className="btn btn-white d-flex justify-content-between w-100 dropdown-toggle-custom mb-3 px-5 py-14 text-primary-hover fs-8"
                                                            type="button"
                                                            onClick={() => toggleShippingOpen(index)}
                                                        >
                                                            {item.question}
                                                            <span>
                                                                <img
                                                                    className="toggle-icon"
                                                                    src={shippingOpen === index
                                                                        ? 'https://raw.githubusercontent.com/Fury51/img-base/0b8aa0769c819eab32b2865fa834b99de9f1ae25/%E5%9C%96%E5%BA%AB/faq-minus.svg'
                                                                        : 'https://raw.githubusercontent.com/Fury51/img-base/0b8aa0769c819eab32b2865fa834b99de9f1ae25/%E5%9C%96%E5%BA%AB/faq-plus.svg'}
                                                                    alt="plus&minus"
                                                                />
                                                            </span>
                                                        </button>

                                                        {/* 根據 shippingOpen 狀態顯示 */}
                                                        {shippingOpen === index && (
                                                            <div className="dropdown-menu-custom w-100 border-0 p-5 bg-secondary mb-4 show">
                                                                {/* 渲染 intro 文字 */}
                                                                <p className="fs-8 fw-bold">{item.answer.intro}</p>

                                                                <ol className="add-decimal w-100 fs-8 mb-0">
                                                                    {/* 渲染 answer 裡面的 items 陣列 */}
                                                                    {item.answer.items?.map((subItem, subIndex) => (
                                                                        <li key={subIndex} className="mb-3">
                                                                            <span className="fw-bold">{subItem.title}</span>
                                                                            <ul className="add-disc">
                                                                                {/* 渲染每一個 item 裡面的 details 陣列 */}
                                                                                {subItem.details?.map((detail, dIndex) => (
                                                                                    <li key={dIndex}>{detail}</li>
                                                                                ))}
                                                                            </ul>
                                                                        </li>
                                                                    ))}
                                                                </ol>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="contact-pane"
                                    role="tabpanel"
                                    aria-labelledby="contact-tab"
                                    tabIndex={0}
                                >
                                    <div className="dropdown dropdown-push w-100 mb-5">
                                        {RegulationData.welfare?.map((item, index) => {
                                            return (
                                                <div className="d-flex gap-3 mb-4" key={index}>
                                                    {/* 左側圖示 */}
                                                    <div className="d-lg-block d-none">
                                                        <img
                                                            src={dropdownQuestionOne}
                                                            alt="dropdown-question-01"
                                                        />
                                                    </div>

                                                    <div className="flex-grow-1">
                                                        {/* 問題按鈕：文字要改為 item.question */}
                                                        <button
                                                            className="btn btn-white d-flex justify-content-between w-100 dropdown-toggle-custom mb-3 px-5 py-14 text-primary-hover fs-8"
                                                            type="button"
                                                            onClick={() => toggleProductsOpen(index)}
                                                        >
                                                            {item.question}
                                                            <span>
                                                                <img
                                                                    className="toggle-icon"
                                                                    src={productsOpen === index
                                                                        ? 'https://raw.githubusercontent.com/Fury51/img-base/0b8aa0769c819eab32b2865fa834b99de9f1ae25/%E5%9C%96%E5%BA%AB/faq-minus.svg'
                                                                        : 'https://raw.githubusercontent.com/Fury51/img-base/0b8aa0769c819eab32b2865fa834b99de9f1ae25/%E5%9C%96%E5%BA%AB/faq-plus.svg'}
                                                                    alt=""
                                                                />
                                                            </span>
                                                        </button>

                                                        {/* 根據 productsOpen 狀態顯示 */}
                                                        {productsOpen === index && (
                                                            <div className="dropdown-menu-custom w-100 border-0 p-5 bg-secondary mb-4 show">
                                                                {/* 渲染 intro 文字 */}
                                                                <p className="fs-8 fw-bold">{item.answer.intro}</p>

                                                                <ol className="add-decimal w-100 fs-8 mb-0">
                                                                    {/* 渲染 answer 裡面的 items 陣列 */}
                                                                    {item.answer.items?.map((subItem, subIndex) => (
                                                                        <li key={subIndex} className="mb-3">
                                                                            <span className="fw-bold">{subItem.title}</span>
                                                                            <ul className="add-disc">
                                                                                {/* 渲染每一個 item 裡面的 details 陣列 */}
                                                                                {subItem.details?.map((detail, dIndex) => (
                                                                                    <li key={dIndex}>{detail}</li>
                                                                                ))}
                                                                            </ul>
                                                                        </li>
                                                                    ))}
                                                                </ol>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container d-lg-none d-block">
                        <div
                            className="row justify-content-center justify-content-lg-between flex-column flex-lg-row mb-5"
                        >
                            <div className="col-lg-3 col-12">
                                <ul className="nav nav-underline gap-1 flex-column" role="tablist">
                                    <li
                                        className="nav-item dashed-to-solid text-lg-start text-center mb-lg-0 mb-4"
                                        role="presentation"
                                    >
                                        <button
                                            className="border-0 active bg-gray-50 text-color text-font lh-base"
                                            id="profile-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#home-pane"
                                            type="button"
                                            role="tab"
                                            aria-controls="home-pane"
                                            aria-selected="true"
                                        >
                                            <span className="me-2"
                                            ><img
                                                    src={paymentIcon}
                                                    alt="payment-icon" /></span>代墊款制度
                                        </button>
                                    </li>
                                </ul>
                            </div>

                            <div className="tab-content col-12 col-lg-8">
                                <div className="tab-pane fade show active">
                                    <div className="dropdown dropdown-push w-100 mb-5">
                                        <div className="d-flex gap-3">
                                            <div className="d-lg-block d-none">
                                                <img
                                                    src={dropdownQuestionOne}
                                                    alt="dropdown-question-01"
                                                />
                                            </div>
                                            <div className="flex-grow-1">
                                                {RegulationData.shipping?.map((item, index) => {
                                                    return (<div key={index}><button
                                                        className="btn btn-white d-flex justify-content-between w-100 dropdown-toggle-custom mb-3 px-5 py-14 text-primary-hover fs-8"
                                                        type="button"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                        onClick={() => toggleShippingOpen(index)}
                                                    >
                                                        {item.question}
                                                        <span
                                                        ><img
                                                                className="toggle-icon"
                                                                src={shippingOpen === index
                                                                    ? 'https://raw.githubusercontent.com/Fury51/img-base/0b8aa0769c819eab32b2865fa834b99de9f1ae25/%E5%9C%96%E5%BA%AB/faq-minus.svg'
                                                                    : 'https://raw.githubusercontent.com/Fury51/img-base/0b8aa0769c819eab32b2865fa834b99de9f1ae25/%E5%9C%96%E5%BA%AB/faq-plus.svg'}
                                                                alt=""
                                                            />
                                                        </span>
                                                    </button>
                                                        <div
                                                            className="dropdown-menu w-100 border-0 p-5 bg-secondary mb-4"
                                                        >
                                                            <p className="fs-8">{item.answer.intro}</p>
                                                            <ol className="add-decimal w-100 fs-8">
                                                                {item.answer.items?.map((subItem, subIndex) => {
                                                                    return (<li key={subIndex}>
                                                                        {subItem.title}
                                                                        <ul className="add-disc">
                                                                            {subItem.details?.map((detail, dIndex) => (
                                                                                <li key={dIndex}>{detail}</li>
                                                                            ))}
                                                                        </ul>
                                                                    </li>)
                                                                })}
                                                            </ol>
                                                        </div></div>)
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container d-lg-none d-block">
                        <div
                            className="row justify-content-center justify-content-lg-between flex-column flex-lg-row mb-lg-5"
                        >
                            <div className="col-lg-3 col-12">
                                <ul className="nav nav-underline gap-1 flex-column" role="tablist">
                                    <li
                                        className="nav-item dashed-to-solid text-lg-start text-center mb-lg-0 mb-4"
                                        role="presentation"
                                    >
                                        <button
                                            className="border-0 active bg-gray-50 text-color text-font lh-base"
                                            id="contact-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#home-pane"
                                            type="button"
                                            role="tab"
                                            aria-controls="home-pane"
                                            aria-selected="true"
                                        >
                                            <span className="me-2"
                                            ><img
                                                    src={welfareIcon}
                                                    alt="welfare-icon" /></span>其他福利
                                        </button>
                                    </li>
                                </ul>
                            </div>

                            <div className="tab-content col-12 col-lg-8">
                                <div className="tab-pane fade show active">
                                    <div className="dropdown dropdown-push w-100">
                                        <div className="d-flex gap-3">
                                            <div className="d-lg-block d-none">
                                                <img
                                                    src={dropdownQuestionOne}
                                                    alt="dropdown-question-01"
                                                />
                                            </div>
                                            <div className="flex-grow-1">
                                                {Regulation.products?.map((item, index) => {
                                                    return (<div key={index}><button
                                                        className="btn btn-white d-flex justify-content-between w-100 dropdown-toggle-custom mb-3 px-5 py-14 text-primary-hover fs-8"
                                                        type="button"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                        onClick={() => toggleProductsOpen(index)}
                                                    >
                                                        {item.question}
                                                        <span
                                                        ><img
                                                                className="toggle-icon"
                                                                src={productsOpen === index
                                                                    ? 'https://raw.githubusercontent.com/Fury51/img-base/0b8aa0769c819eab32b2865fa834b99de9f1ae25/%E5%9C%96%E5%BA%AB/faq-minus.svg'
                                                                    : 'https://raw.githubusercontent.com/Fury51/img-base/0b8aa0769c819eab32b2865fa834b99de9f1ae25/%E5%9C%96%E5%BA%AB/faq-plus.svg'}
                                                                alt="plus&minus"
                                                            />
                                                        </span>
                                                    </button>
                                                        <div
                                                            className="dropdown-menu w-100 border-0 p-5 bg-secondary mb-4"
                                                        >
                                                            <p className="fs-8">{item.answer.intro}</p>
                                                            <ol className="add-decimal w-100 fs-8">
                                                                {item.answer.items?.map((subItem, subIndex) => {
                                                                    return (<li key={subIndex}>
                                                                        {subItem.title}
                                                                        <ul className="add-disc">
                                                                            {subItem.details?.map((detail, dIndex) => (
                                                                                <li key={dIndex}>{detail}</li>
                                                                            ))}
                                                                        </ul>
                                                                    </li>)
                                                                })}
                                                            </ol>
                                                        </div></div>)
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )

}
export default Regulation;

