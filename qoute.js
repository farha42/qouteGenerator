
const arrayOfQuotes = [
    {'author': ' Mahatma Gandhi', 
    'quote': 'Live as if you were to die tomorrow. Learn as if you were to live forever.'
    },
    {'author': 'Ralph Waldo Emerson', 
    'quote': 'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.'
    },
    {'author': 'Andre Gide, Autumn Leaves', 
    'quote': 'It is better to be hated for what you are than to be loved for what you are not.'
    },
    {'author': ' Oscar Wilde', 
    'quote': 'To live is the rarest thing in the world. Most people exist, that is all'
    },
    {'author': 'Elbert Hubbard', 
    'quote': 'A friend is someone who knows all about you and still loves you.'
    },
    {'author': 'Elbert Hubbard', 
    'quote': 'Do not take life too seriously. You will not get out alive.'
    },
    {
        'author':'Maya Angelou',
        'quote':'forget what you did, but people will never forget how you made them feel'
    },
];

function create_new_Quote(){
    const random_Quote = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
    document.querySelector('#FirstQuote').textContent = `\"${arrayOfQuotes[random_Quote].quote}\"`;
    document.querySelector('#SecondQuote').textContent = `'${arrayOfQuotes[random_Quote].author}'`;
    
}