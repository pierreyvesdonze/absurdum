import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Level1 from './Level1';
import Level2 from './Level2';
import Level3 from './Level3';
import Level4 from './Level4';
import Level5 from './Level5';
import Level6 from './Level6';
import Level7 from './Level7';
import Level8 from './Level8';
import Menu from './Menu';
import IntroGame from './Menu/Intro';
import Quest1 from './Menu/Quests/Quest1';
import Quest1Savior from './Menu/Quests/Quest1/Quest1Savior';
import OutroQuest1 from './Menu/Quests/Quest1/OutroQuest1Carinatris';
import Quest1Rich from './Menu/Quests/Quest1/Quest1Rich';
import OutroQuest1Rich from './Menu/Quests/Quest1/OutroQuest1Rich';
import Quest1RainCoin from './Menu/Quests/Quest1/Quest1RainCoin'
import Quest1HelpMe from './Menu/Quests/Quest1/Quest1HelpMe';
import Quest1Immortal from './Menu/Quests/Quest1/Quest1Immortal';
import Quest2Intro from './Menu/Quests/Quest2/Quest2Intro';
import Quest2Timer from './Menu/Quests/Quest2/Quest2Timer';
import Quest2Cancel from './Menu/Quests/Quest2/Quest2Cancel';
import Quest2Outro from './Menu/Quests/Quest2/Quest2Outro';
import Quest2Clock from './Menu/Quests/Quest2/Quest2Clock';
import Quest3Intro from './Menu/Quests/Quest3/Quest3Intro';
import Quest3Affectus from './Menu/Quests/Quest3/Quest3Affectus';
import Quest4Memory from './Menu/Quests/Quest4/Quest4Memory';
import Quest4Discoveries from './Menu/Quests/Quest4/Quest4Discoveries';
import Quest4Outro from './Menu/Quests/Quest4/Quest4Outro';
import Quest5Doc from './Menu/Quests/Quest5/Quest5Doc';
import Quest5Columba from './Menu/Quests/Quest5/Quest5Columba';
import Quest5Hospital from './Menu/Quests/Quest5/Quest5Hospital';
import Quest5Pendu from './Menu/Quests/Quest5/Quest5Pendu';
import Quest6Aliens from './Menu/Quests/Quest6/Quest6Aliens';
import Quest6Micro from './Menu/Quests/Quest6/Quest6Micro';
import Quest6Timer from './Menu/Quests/Quest6/Quest6Timer';
import Quest6Flashback from './Menu/Quests/Quest6/Quest6Flashback';
import Quest6Palindrome from './Menu/Quests/Quest6/Quest6Palindrome';
import Quest6Phobia from './Menu/Quests/Quest6/Quest6Phobia';
import Quest6Final from './Menu/Quests/Quest6/Quest6Final';

const GameContainer = () => {
    return (
        <>
            <Routes>
                <Route path = '/' element                     = {<Level1 />} />
                <Route path = '/mort' element                 = {<Level2 />} />
                <Route path = '/answertoeverything' element   = {<Level3 />} />
                <Route path = '/capitales' element            = {<Level4 />} />
                <Route path = '/intothedark' element          = {<Level5 />} />
                <Route path = '/boitearythme' element         = {<Level6 />} />
                <Route path = '/cesar' element                = {<Level7 />} />
                <Route path = '/outro' element                = {<Level8 />} />
                <Route path = '/introgame' element            = {<IntroGame />} />
                <Route path = '/absurdum' element             = {<Menu />} />
                <Route path = '/cogitoergosum' element        = {<Quest1 />} />
                <Route path = '/savior' element               = {<Quest1Savior />} />
                <Route path = '/outroquest1' element          = {<OutroQuest1 />} />
                <Route path = '/rich' element                 = {<Quest1Rich />} />
                <Route path = '/richoutro' element            = {<OutroQuest1Rich />} />
                <Route path = '/raincoin' element             = {<Quest1RainCoin />} />
                <Route path = '/helpme' element               = {<Quest1HelpMe />} />
                <Route path = '/immortal' element             = {<Quest1Immortal />} />
                <Route path = '/tempus/intro' element         = {<Quest2Intro />} />
                <Route path = '/tempus/timer' element         = {<Quest2Timer />} />
                <Route path = '/tempus/cancel' element        = {<Quest2Cancel />} />
                <Route path = '/tempus/clock' element         = {<Quest2Clock />} />
                <Route path = '/tempus/outro' element         = {<Quest2Outro />} />
                <Route path = '/affectus/intro' element       = {<Quest3Intro />} />
                <Route path = '/affectus/affectus' element    = {<Quest3Affectus />} />
                <Route path = '/monstrum/memory' element      = {<Quest4Memory />} />
                <Route path = '/monstrum/discoveries' element = {<Quest4Discoveries />} />
                <Route path = '/monstrum/duck' element        = {<Quest4Outro />} />
                <Route path = '/morbus/pendu' element         = {<Quest5Pendu />} />
                <Route path = '/morbus/hospital' element      = {<Quest5Hospital />} />
                <Route path = '/morbus/doc' element           = {<Quest5Doc />} />
                <Route path = '/morbus/columba' element       = {<Quest5Columba />} />
                <Route path = '/absurdum/aliens' element      = {<Quest6Aliens />} />
                <Route path = '/absurdum/micro' element       = {<Quest6Micro />} />
                <Route path = '/absurdum/timer' element       = {<Quest6Timer />} />
                <Route path = '/absurdum/flashback' element   = {<Quest6Flashback />} />
                <Route path = '/absurdum/palindrome' element  = {<Quest6Palindrome />} />
                <Route path = '/absurdum/phobia' element      = {<Quest6Phobia />} />
                <Route path = '/absurdum/final' element       = {<Quest6Final />} />
            </Routes>
        </>
    );
};

export default GameContainer;
