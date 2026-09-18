import React, {useEffect, useMemo, useState} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const chapters = [
  [1,'Physical AI','Bodies change intelligence','Foundations'],[2,'Embodied Intelligence','Perception–action loops','Foundations'],[3,'Sensors & Perception','Turning signals into state','Foundations'],
  [4,'ROS 2 Foundations','Distributed robot software','Robot Stack'],[5,'URDF & Robot Models','Describing bodies and joints','Robot Stack'],[6,'TF & Kinematics','Reasoning across frames','Robot Stack'],
  [7,'Gazebo Simulation','Physics-first experiments','Simulation'],[8,'Unity for Robotics','High-fidelity interaction','Simulation'],[9,'Digital Twins','Synthetic data at scale','Simulation'],
  [10,'Reinforcement Learning','Learning from reward','Robot Learning'],[11,'Imitation Learning','Learning from demonstration','Robot Learning'],[12,'Vision-Language-Action','Foundation models that act','Robot Learning'],
  [13,'Isaac Sim & Isaac ROS','GPU-accelerated robotics','Deployment'],[14,'Edge Deployment','Real-time inference on robots','Deployment'],[15,'Multi-Agent Systems','Coordinating robot teams','Deployment'],
  [16,'Human-Robot Interaction','Trust, intent and collaboration','Safety'],[17,'Safety & Evaluation','Evidence before autonomy','Safety'],[18,'Capstone System','Build an autonomous mobile manipulator','Capstone']
];

function ChapterCard({chapter, complete, onToggle}) {
  const [number,title,description,track] = chapter;
  return <article className={`${styles.chapterCard} ${complete ? styles.complete : ''}`}>
    <div className={styles.cardMeta}><span>{String(number).padStart(2,'0')}</span><small>{track}</small></div>
    <Heading as="h3">{title}</Heading><p>{description}</p>
    <div className={styles.cardActions}><Link to={`/book/chapter-${String(number).padStart(2,'0')}`}>Open chapter <span>↗</span></Link><button onClick={() => onToggle(number)} aria-label={`Mark ${title} ${complete ? 'incomplete' : 'complete'}`}>{complete ? '✓' : '○'}</button></div>
  </article>;
}

export default function Home() {
  const [query,setQuery] = useState('');
  const [completed,setCompleted] = useState([]);
  useEffect(() => { try { setCompleted(JSON.parse(localStorage.getItem('pai-progress') || '[]')); } catch {} }, []);
  const toggle = (number) => setCompleted(current => { const next = current.includes(number) ? current.filter(x => x !== number) : [...current,number]; localStorage.setItem('pai-progress',JSON.stringify(next)); return next; });
  const filtered = useMemo(() => chapters.filter(c => `${c[1]} ${c[2]} ${c[3]}`.toLowerCase().includes(query.toLowerCase())),[query]);
  const progress = Math.round((completed.length / chapters.length) * 100);
  return <Layout title="Interactive Textbook" description="Learn Physical AI through 18 simulation-first chapters and a complete capstone.">
    <header className={styles.hero}>
      <div className={styles.heroGrid}></div>
      <div className={styles.heroCopy}><p className={styles.kicker}>OPEN TEXTBOOK · 18 CHAPTERS · 6 PARTS</p><Heading as="h1">Build intelligence<br/><em>that can move.</em></Heading><p className={styles.lead}>A simulation-first field guide to robots that perceive, reason and act safely in the physical world.</p><div className={styles.heroActions}><Link className={styles.primary} to="/book/intro">Start learning <span>→</span></Link><a className={styles.secondary} href="#curriculum">Explore curriculum</a></div><div className={styles.heroStats}><div><strong>18</strong><span>Chapters</span></div><div><strong>24+</strong><span>Labs</span></div><div><strong>1</strong><span>Capstone</span></div></div></div>
      <div className={styles.robotVisual} aria-label="Technical robot illustration"><img src="img/robot-lab.svg" alt="Blueprint-style humanoid robot in a research lab"/><div className={styles.scanLine}></div><span className={styles.visualTag}>PERCEPTION ONLINE</span></div>
    </header>
    <main className={styles.main} id="curriculum">
      <section className={styles.sectionHead}><div><p className={styles.kicker}>CURRICULUM MATRIX</p><Heading as="h2">From first principles to deployment</Heading></div><div className={styles.progressBox}><span>Your progress</span><strong>{completed.length}/18</strong><div><i style={{width:`${progress}%`}}></i></div></div></section>
      <label className={styles.search}><span>⌕</span><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search chapters, tools or concepts…"/><small>{filtered.length} results</small></label>
      <section className={styles.chapterGrid}>{filtered.map(chapter => <ChapterCard key={chapter[0]} chapter={chapter} complete={completed.includes(chapter[0])} onToggle={toggle}/>)}</section>
      <section className={styles.capstone}><div><p className={styles.kicker}>FINAL SYSTEM</p><Heading as="h2">Autonomous mobile manipulator</Heading><p>Combine navigation, perception, language grounding and safe manipulation into one evaluated robot system.</p></div><Link to="/book/chapter-18">Open capstone brief <span>↗</span></Link></section>
    </main>
  </Layout>;
}
