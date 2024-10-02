const passwordRules =[
    {text:'8 characters minimum',validate:(pw)=>pw.length>=8},
    {text:'One lowercase character',validate:(pw)=> /[a-z]/.test(pw)},
    {text:'One uppercase character',validate:(pw)=> /[A-Z]/.test(pw)},
    {text:'One non-alphapatic charater',validate:(pw) => /\W|_/.test(pw)}
  ]
 export  const possibleError=['Password must be at least 8 characters long','Password must contain at least one lowercase letter'
  ,'Password must contain at least one uppercase letter' ,'Password must contain at least one non-alphabetic character'
]
  export default passwordRules