const A = 2
const B = 1
const C = 3

if(A >= B && A >= C && B >= C) 

    console.log(`C:${C} < B:${B} < A:${A}`)
    else if(A >= B && A >= C && C >= B){

        console.log(`B:${B} < C:${C} < A:${A}`)
            }else if(B >= A && B>=C && A>=C)

                console.log(`C:${C} < A:${A} < B:${B}`)
                else if(B >= A && B >= C && C >= A)

                    console.log(`A:${A} < C:${C} < B:${B}`)
                        else if(C >= A && C >= B && A >= B)

                            console.log(`B${B} < A${A} < C${C}`)
                                else(console.log(`A${A} < B${B} < C${C}`))
