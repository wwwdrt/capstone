function speakers() {
  const speakers = [
    {
      name: 'Sugar Ray',
      pfp: '/capstone/public/speakers/speaker-sugar-ray.jpg',
      title: 'Former Professional Boxer and Boxing Analyst',
      description:
        'Sugar Ray Leonard is a retired American professional boxer and former five-time world champion. He is widely regarded as one of the greatest boxers of all time and has been inducted into the International Boxing Hall of Fame. In addition to his boxing career, Leonard has also worked as a boxing analyst for various television networks, including HBO and NBC. He has also been involved in various philanthropic efforts, including the establishment of the Sugar Ray Leonard Foundation to support juvenile diabetes research. Leonard attended Palmer Park High School in Maryland but did not attend college.',
    },
    {
      name: 'Bob Arum',
      pfp: '/capstone/public/speakers/speaker-bob-arum.jpg',
      title: 'Boxing Promoter',
      description:
        'Bob Arum is an American lawyer, boxing promoter and founder of Top Rank. He has promoted some of the biggest names in boxing, including Muhammad Ali, George Foreman, and Manny Pacquiao. Arum graduated from Harvard Law School.',
    },
    {
      name: 'Eddie Hearn',
      pfp: '/capstone/public/speakers/speaker-eddie-hearn.jpg',
      title: 'Boxing Promoter',
      description:
        'Eddie Hearn is a British sports promoter and managing director of Matchroom Sport. He has promoted numerous high-profile boxing events in the UK, including the heavyweight bout between Anthony Joshua and Wladimir Klitschko. Hearn graduated from the University of Essex.',
    },
    {
      name: 'Dr. Margaret Goodman',
      pfp: '/capstone/public/speakers/speaker-dr-margaret.png',
      title: 'Physician and Boxing Administrator',
      description:
        'Dr. Margaret Goodman is a physician who has served as a ringside doctor and medical consultant for numerous boxing events. She is also the founder of the Voluntary Anti-Doping Association (VADA), which promotes drug-free competition in combat sports. Goodman earned her medical degree from the University of Southern California.',
    },
    {
      name: 'Bernard Hopkins',
      pfp: '/capstone/public/speakers/speaker-bernard-hopkins.jpg',
      title: 'Former Professional Boxer and Boxing Promoter',
      description:
        'Bernard Hopkins is a retired American professional boxer and former middleweight and light heavyweight champion. He is also a boxing promoter and has worked with Golden Boy Promotions. Hopkins is known for his longevity in the sport, having competed professionally until the age of 51.',
    },
    {
      name: 'Mauricio Sulaiman',
      pfp: '/capstone/public/speakers/speaker-mauricio-sulaiman.jpg',
      title: 'Boxing Administrator',
      description:
        'Mauricio Sulaiman is a Mexican businessman who serves as the President of the World Boxing Council (WBC), one of the major governing bodies in professional boxing. He is also involved in various philanthropic efforts and initiatives to promote the sport of boxing. Sulaiman earned his law degree from the Universidad Nacional Autónoma de México.',
    },
  ];

  const createSpeakers = () => {
    const root = document.querySelector('#speakers');

    const speakersContainer = document.createElement('div');
    speakersContainer.classList.add(
      'flex',
      'flex-col',
      'justify-center',
      'm-auto',
      'items-center',
      'pt-[3rem]',
    );

    const h2 = document.createElement('h2');
    h2.classList.add('text-2xl', 'font-medium', 'text-mainprogram');
    h2.textContent = 'Featured Speakers';

    const hr = document.createElement('hr');
    hr.classList.add('hr');

    const moreBtn = document.createElement('button');
    moreBtn.type = 'submit';
    moreBtn.classList.add(
      'flex',
      'justify-center',
      'p-5',
      'md:hidden',
      'm-auto',
      'w-full',
      'bg-white',
      'mb-[2rem]',
      'mt-[2rem]',
      'border-2',
      'border-navfont',
      'rounded',
      'items-center',
      'gap-2',
      'font-medium',
      'text-mainprogram',
      'cursor-painter',
    );
    moreBtn.innerHTML = `MORE 
    <ion-icon 
        name="chevron-down-outline" 
        class="text-corange font-bold text-lg">
        </ion-icon> 
`;

    const cardsContainer = document.createElement('div');
    cardsContainer.classList.add(
      'flex',
      'flex-col',
      'gap-[2rem]',
      'md:grid',
      'md:grid-cols-2',
      'w-[95%]',
      'md:mb-[4.5rem]',
    );
    speakers.forEach((human, i) => {
      const speaker = document.createElement('div');
      speaker.innerHTML = `
            <div class="speaker">
                <figure class="bg-chessboard bg-no-repeat p-[2rem]">
                    <img 
                        src="${human.pfp}" 
                        alt="World Boxing Conference Speaker" 
                        class="bg-auto max-w-none">
                </figure>
                <div class="speaker-info">
                    <h3 class="text-lg font-medium text-mainprogram">${human.name}
                    </h3>
                    <p class="text-corange italic">${human.title}</p>
                    <hr class="speaker-hr">
                    <p class="text-xs">${human.description}</p>
                </div>
            </div>
    `;
      cardsContainer.appendChild(speaker);

      // eslint-disable-next-line no-unused-expressions
      i >= 2 ? speaker.classList.add('hidden', 'md:flex', 'show') : '';
    });

    moreBtn.addEventListener('click', () => {
      const person = document.querySelectorAll('.show');
      person.forEach((human) => {
        if (human.classList.contains('hidden')) {
          human.classList.toggle('hidden');
          moreBtn.innerHTML = `LESS
        <ion-icon 
        name="chevron-up-outline" 
        class="text-corange font-bold text-lg">
        </ion-icon> 
  `;
        } else {
          human.classList.toggle('hidden');
          moreBtn.innerHTML = `MORE 
        <ion-icon 
        name="chevron-down-outline" 
        class="text-corange font-bold text-lg">
        </ion-icon> 
`;
        }
      });
    });

    root.appendChild(speakersContainer);
    speakersContainer.appendChild(h2);
    speakersContainer.appendChild(hr);
    speakersContainer.appendChild(cardsContainer);
    cardsContainer.appendChild(moreBtn);
  };
  createSpeakers();
}

export default speakers;
