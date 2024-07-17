import React from 'react'
import Carts from './Carts'
import Modal from './Modal'

const List = ({search}) => {
    let movies=[
        {
        image:'https://i-egybest.com/wp-content/uploads/2024/02/4303dd34MV5BZjZhM2IyZTktNjFiZS00NWFlLTg0NzMtMzIxZTcxNjRkOGE4XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_SX700-351x520.jpg',
        name:'A Killer Paradox',
        type:'DRAMA CRIME',
        stars:'https://cdn-icons-png.flaticon.com/128/992/992000.png',
        like:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAQpJREFUSEvV1b0uRUEQwPHfVSl1GiQ0vnqeQSs6vRfQ+ahIiMILaJUSjRfQiZ7QCaVSIdFgElfWidhz7t0tbHmy+//P7OzM6am8epX5ugo2sY1DHLUJrotgHacJdBoPOUlbwQouMJIAp/BUQrCEy89rGU1gAQ5BduUymMUVxhqkfexm6WSL/IjJX0DzuOsqWENEFlH3M3tvA2nsuccOzuJ7ekU3WPjaPIwgELdYbArSaIcVfLPTDP6VIBowGvFHDUpmECPluJbgBeN4rSU4wFb/6ZYu8hsm8FxLcIKNtPFKZhCPZKY5wkt28jlWm6MlFcQs2sPcgLNoGdd/CQaYa/kjuf9BnpDZUV3wAUmENRkde5ahAAAAAElFTkSuQmCC',
        discreption:'When one manslaughter incident leads to another, a simple young man finds himself embroiled in an exciting, endless chase with a sharp-witted detective.'
        },
        {
        image:'https://i-egybest.com/wp-content/uploads/2024/07/3x76s445MV5BNzEyMDFmNzEtYWI5ZC00MTM3LWEwOTAtYjBjYzY4OWFlOTFkXkEyXkFqcGdeQXVyMTU4NjYxMTk3._V1_SX700-334x520.jpg',
        name:'Antihero',
        type:'CRIME',
        stars:'https://cdn-icons-png.flaticon.com/128/991/991999.png',
        like:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAQpJREFUSEvV1b0uRUEQwPHfVSl1GiQ0vnqeQSs6vRfQ+ahIiMILaJUSjRfQiZ7QCaVSIdFgElfWidhz7t0tbHmy+//P7OzM6am8epX5ugo2sY1DHLUJrotgHacJdBoPOUlbwQouMJIAp/BUQrCEy89rGU1gAQ5BduUymMUVxhqkfexm6WSL/IjJX0DzuOsqWENEFlH3M3tvA2nsuccOzuJ7ekU3WPjaPIwgELdYbArSaIcVfLPTDP6VIBowGvFHDUpmECPluJbgBeN4rSU4wFb/6ZYu8hsm8FxLcIKNtPFKZhCPZKY5wkt28jlWm6MlFcQs2sPcgLNoGdd/CQaYa/kjuf9BnpDZUV3wAUmENRkde5ahAAAAAElFTkSuQmCC',
        discreption:'In a system that rarely does wrong, lawyer Akizumi defies Japans overwhelming conviction rate and, with the help of elite lawyers, achieves acquittal for his clients despite overwhelming evidence of their guilt.'
         },
         {
        image:'https://i-egybest.com/wp-content/uploads/2024/07/711s8541jQxqQz_4c.jpg',
        name:'The Auditors',
        type:'DRAMA',
        stars:'https://cdn-icons-png.flaticon.com/128/991/991998.png',
        like:'https://cdn-icons-png.flaticon.com/128/126/126473.png',
        discreption:"A veteran audit team leader and a new employee uncover rampant corruption in a construction company."
        },
        {
        image:'https://i-egybest.com/wp-content/uploads/2024/01/j77q12qxMV5BZDJlNDUwMjEtNTU4My00NzFhLTgyNzQtMmRjNjM3ZTEwYzFjXkEyXkFqcGdeQXVyNjI4NDY5ODM@.jpg_V1_SX700-367x520.jpg',
        name:' Captivating the King',
        type:'DRAMA',
        stars:'https://cdn-icons-png.flaticon.com/128/992/992001.png',
        like:'https://cdn-icons-png.flaticon.com/128/126/126473.png',
        discreption:"In light of a royal and political conflict, a king becomes involved with an attractive woman who seeks revenge on him, but her hidden desire turns into an unexpected love."
        },
        {
        image:'https://i-egybest.com/wp-content/uploads/2024/07/S96s4s35MV5BOTZhZWQ3ZGUtZjM2NC00OTViLWI3MzItOWJkNzFkY2ZhMzcwXkEyXkFqcGc@.jpg_V1_SX700-347x520.jpg',
        name:' Tasogare Out Focus',
        type:'CRIME',
        stars:'https://cdn-icons-png.flaticon.com/128/991/991997.png',
        like:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAQpJREFUSEvV1b0uRUEQwPHfVSl1GiQ0vnqeQSs6vRfQ+ahIiMILaJUSjRfQiZ7QCaVSIdFgElfWidhz7t0tbHmy+//P7OzM6am8epX5ugo2sY1DHLUJrotgHacJdBoPOUlbwQouMJIAp/BUQrCEy89rGU1gAQ5BduUymMUVxhqkfexm6WSL/IjJX0DzuOsqWENEFlH3M3tvA2nsuccOzuJ7ekU3WPjaPIwgELdYbArSaIcVfLPTDP6VIBowGvFHDUpmECPluJbgBeN4rSU4wFb/6ZYu8hsm8FxLcIKNtPFKZhCPZKY5wkt28jlWm6MlFcQs2sPcgLNoGdd/CQaYa/kjuf9BnpDZUV3wAUmENRkde5ahAAAAAElFTkSuQmCC',
        discreption:"Two high school students, Mao and Hisashi, set rules for maintaining boundaries while sharing a bedroom. But navigating friendship, sex life, and privacy is complicated as they learn that some things can't be promised so easily."
        },
        {
        image:'https://i-egybest.com/wp-content/uploads/2024/07/N8210588MV5BNzAxMGE1YzUtZGZiZi00ZjdjLWE0ZTktOTJiZDljMGUyYTA2XkEyXkFqcGdeQXVyMTE2NDA4MDMy._V1_SX700-416x520.jpg',
        name:'Exploding Kittens ',
        type:'DRAMA',
        stars:'https://cdn-icons-png.flaticon.com/128/9377/9377383.png',
        like:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAQpJREFUSEvV1b0uRUEQwPHfVSl1GiQ0vnqeQSs6vRfQ+ahIiMILaJUSjRfQiZ7QCaVSIdFgElfWidhz7t0tbHmy+//P7OzM6am8epX5ugo2sY1DHLUJrotgHacJdBoPOUlbwQouMJIAp/BUQrCEy89rGU1gAQ5BduUymMUVxhqkfexm6WSL/IjJX0DzuOsqWENEFlH3M3tvA2nsuccOzuJ7ekU3WPjaPIwgELdYbArSaIcVfLPTDP6VIBowGvFHDUpmECPluJbgBeN4rSU4wFb/6ZYu8hsm8FxLcIKNtPFKZhCPZKY5wkt28jlWm6MlFcQs2sPcgLNoGdd/CQaYa/kjuf9BnpDZUV3wAUmENRkde5ahAAAAAElFTkSuQmCC',
        discreption:"Eternal conflict reaches epic proportions when both God and Satan are sent to Earth in the bodies of chunky house cats."
        }
    ]
  return (
    <div className='list'>
    {movies.filter(e=>e.name.toLowerCase().includes(search.toLowerCase())).map(el=><Carts el ={el}/>)}
      
    </div>
  )
}

export default List
