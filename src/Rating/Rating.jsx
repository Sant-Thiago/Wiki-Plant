import './Rating.css'

function Rating() {
    let grades;
    let listClass;
    let totalReviews;

    function verifAssessment(assessment) {
        const negative = assessment[0].total + assessment[1].total;
        const positive = assessment[3].total + assessment[4].total;

        return assessment[2].total + (positive - negative);
    }

    function getTotal(assessments) {
        return assessments.reduce((total, obj) => total + obj.total, 0);
    }

    function getPercent(percentBase, valueBase, value) {
        return percentBase * value / valueBase;
    }

    function geneStart(obj) {
        const result = verifAssessment(obj);
        const total = getTotal(obj);
        const percent = getPercent(100, total, result) / 10;

        totalReviews = total;
        grades = (percent / 2).toFixed(1);

        listClass = [];
        for (let i = 1; i <= 5; i++) {
            
            if (i < grades || i + 0.3 < grades) {
                listClass.push("bi-star-fill");
            } else if (i - 0.4 > grades) {
                listClass.push("bi-star");
            } else {
                listClass.push("bi-star-half");
            }
        }
    }

    const objAssessment = [
        { nota: 1, total: 1 },
        { nota: 2, total: 4 },
        { nota: 3, total: 9 },
        { nota: 4, total: 4 },
        { nota: 5, total: 3 }
    ];

    geneStart(objAssessment);

    // avaliação = {
    //     pessoa: id_1381209,
    //     nota/valor: 2,
    //     planta: id_1230123,
    //     data: 12/1/2032
    // }
    // "select nota from avaliação group by nota"
    // notas 
    // // 1: 7, = 7
    // // 2: 0, = 0
    // // 3: 8, = 24
    // // 4: 0, = 0
    // // 5: 3, = 15  

    // total 46 = 32
    
        // 1° ruim
    // 2° medio
    // 3° legal
    // 4° bom
    // 5° perfeito

    
    return (
        <div className='ratings'>
            <div className='starsGrades'>
                <p id='stars' className='containerStars'>
                    {
                        listClass.map((classe, index) => {
                            return <i key={index} className={classe}></i>
                        })
                    }
                </p>
                <p id='grades' className='grades'>{grades}</p>
            </div>
            <a href="./" id='reviews' className='reviews'>({totalReviews}
                {
                    totalReviews == 1 ? ` review`: ` reviews`
                }
            )
            </a>
        </div>
    )
}

export default Rating;