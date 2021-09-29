import './ReadMyStory.css';
import Page from '../../components/Page/Page';
import { ABOUT_ME_PATH, MEDIA_QUERY_SIZE } from '../../utils/constants';
import Team from '../../images/Team.jpg';
import GlobalLogic from '../../images/Global-Logic.jpg';
import Regent from '../../images/Regent.jpg';
import Warehouse from '../../images/Warehouse.jpg';
import { useMediaQueryHook } from '../../utils/hooks/useMediaQuery';

const ReadMyStory = () => {
  const isPageWide = useMediaQueryHook(MEDIA_QUERY_SIZE.desktop);

  return (
    <Page homeButtonPath={ABOUT_ME_PATH} homeButtonText='About me'>
      <div className='main__read-my-story'>
        <h1 className='title__how-started'>
          How did I become a software engineer?
        </h1>
        <div className='text__how-started'>
          <p>This story has started in 2015.</p>
          <p>
            I was getting my Bachelor degree in Special Education, it was my
            last year of university. That was a year when I realized that I
            didn’t enjoy working with kids (it’s really hard to explain why
            though). I graduated from university, went on 3 months trip to Asia
            and decided that teaching wasn’t something I wanted to do all my
            life.
          </p>

          <p>
            It was a hard time for me, I felt really down: 5 years of my life
            were wasted on getting the education that I didn’t want to use.
            However, I believe that sitting and complaining is never an option
            so I started to work on improving my life. I came back from Asia and
            got a job in my first IT company. I was writing SEO content for
            small businesses websites. It was a good job but I got so bored in
            only 6 months from all repetitive tasks! That’s when I found out
            that I wanted to do something where I would need to learn all the
            time. I always loved challenges and to be honest, I always enjoyed
            studying.
          </p>
          <p>
            Couple of weeks of research and I found about working in software
            development industry. I decided that I would be a good test engineer
            because of my teaching background and time-management skills. And my
            husband had a friend who was teaching future software engineers in a
            private school with a funny name: ‘Go IT”. It took me one month to
            make this huge step in my life: sign up in ‘Go IT’ for the ‘Quality
            Assurance’ 3-months course. I told myself: why not try?
          </p>

          <p>
            It’s probably easy to guess that I really loved to study in 'Go IT'!
            It was a whole new world for me and I was going to be the best
            student. And my mission was achieved (I was actually one of the best
            students). I was the only one who did all the tasks in time, I would
            studying during the day and then I had to work at night. Two months
            after I started to study in 'Go IT', our teacher had referred me to
            his project in one of the biggest IT companies in Ukraine, Global
            Logic. I failed that interview (it was 3-hours interview, at least I
            was still alive!) but despite that, I was offered the internship job
            on another project in the same company.
          </p>
          <p className='p__big-day'>
            1st of August, 2016: I have started to work as a Software Engineer.
            (Big day!)
          </p>

          <div className='img__container-row'>
            <div className='img__container-row__with-text'>
              <img className='img__horizontal' src={Team}></img>
              <div className='img__text'>My team in GlobalLogic</div>
            </div>

            {isPageWide && (
              <div className='img__container-row__with-text'>
                <img className='img__horizontal' src={GlobalLogic}></img>
                <div className='img__text'>Our office in GlobalLogic</div>
              </div>
            )}
          </div>

          <p>
            I still remember my first day, I don’t think I have ever been so
            scared! Nevertheless, I was so lucky with my first team and my first
            manager. I learned a lot at this job, all the basics: what is the
            development process, Agile, scrum, what is ‘bug’, Jira, stand-ups
            etc. It was an amazing year. And I loved testing! I loved to work in
            IT! I was very happy that I found something that I was enjoying
            doing (and I still do).
          </p>

          <div className='img__container'>
            <img className='img__regent' src={Regent}></img>
            <div className='img__text'>My first day of studying in NZ</div>
          </div>

          <p>
            In 2017 I have moved to beautiful New Zealand. I came here to get
            post-graduation diploma in Computer Science (so yeah, I have IT
            education now). After one month in New Zealand, I got a job as a
            software tester in The Warehouse Group. I said at the interview that
            I wanted to learn programming, I was already doing some automation
            tests with Selenium and Java at home. Again, I was super lucky with
            that job and all the people I met there. I have learned so much!
            That's where I implemented my very first automation tests and
            learned JavaScript. I had finished my Computer Science diploma and
            started to work full time in The Warehouse Group. I had a chance to
            do test automation with C#, with Java and then with JavaScript. I
            loved coding, the more I was learning, the more I wanted to learn.
          </p>

          <div className='img__container-warehouse'>
            <img className='img__horizontal' src={Warehouse}></img>
            <div className='img__text'>In The Warehouse Group: Christmas</div>
          </div>

          <p>
            Today I keep focusing on improving my programming skills. I love
            coding, I love solving challenges, I love how creative I can be. I
            build my own home projects with React, at the same time I improve in
            DevOps and try to be more cross-functional. Today I am more
            confident in myself and I’ve got some really valuable job
            experience. Of course, I can do even better and that’s why I keep
            learning every day.
          </p>
          <p className='p__end'>
            I am so happy that I work in IT. It’s often hard, it requires a lot
            of dedication and effort to succeed. Technologies change so fast,
            it’s not easy to stay up to date with everything. But I love what I
            am doing, I like that I often code in my night dreams and always
            looking forward to coming back to work from holidays!`;
          </p>
        </div>
      </div>
    </Page>
  );
};

export default ReadMyStory;
