import Image from "next/image";
import './styles/home.css';
import TypingEffect from "@/components/TypingEffect";

export default function Home() {
  return (
    <div className="min-h-screen p-2">
      {/* MAIN */}
      <div className="head-Contain">
      <Image
        src="/img/webdev.jpg"
        alt="Image de fond de développeur web"
        fill // Permet de couvrir tout l’espace (à la place de background-image)
        className="z-0 object-cover"
        priority
      />
        <Image 
          className="pic" 
          src="/img/cg.png" 
          alt="Charly Guinel" 
          width={500} // Ajuste les dimensions selon ta taille d'image
          height={500} // Ajuste les dimensions selon ta taille d'image
        />
        
        <div className="head-desc">
          <div className="pattern-dots-sm">_PORTFOLIO</div>
          <h1>Bienvenue</h1>
          <h2>Moi c&apos;est Charly Guinel.</h2> {/* Correction ici */}
          
          <div className="typing">
            <span className="text first-text">Je suis développeur</span>
            <TypingEffect />
          </div>
          
          <p>
            <i className="fa-solid fa-terminal"></i> Je recherche une alternance dans le développement web, 
            convaincu que ma passion pour le développement web et ma soif d&apos;apprendre me permettront de relever de nouveaux défis. {/* Correction ici */}
            <br /><br />
            <i className="fa-solid fa-terminal"></i> L&apos;alternance, c&apos;est une opportunité pour moi de combiner mes connaissances {/* Correction ici */}
            théoriques avec une expérience pratique en entreprise. Travailler aux côtés de professionnels me permettra d&apos;approfondir {/* Correction ici */}
            mes compétences techniques et d&apos;acquérir une compréhension approfondie des processus de développement web. {/* Correction ici */}
          </p>
        </div>

      </div>

      {/* ABOUT ME */}
      <section id="aboutMe" className="aboutMe">
        <h2 className="about-title" data-aos="zoom-in" data-aos-duration="750">
          À propos de moi
        </h2>

        <div className="aboutTop" data-aos="zoom-in" data-aos-duration="1750">
          <div className="about">
            <div className="pattern-dots-sm">
              <span className="title-dots">
                <i className="fa-solid fa-code"></i>Ma Reconversion_
              </span>
            </div>
            <p>
              Après 10 ans dans la boulangerie, il était temps de rendre le tablier, et de me consacrer à
              ma passion, l&apos;informatique. {/* Correction ici */}
              Pour cela, j&apos;ai décidé d&apos;entamer une reconversion professionnelle en tant
              que Développeur Web & Web Mobile. <br />
              <br /> J&apos;ai pour cela intégré une formation dans l&apos;établissement Arinfo Nantes. {/* Correction ici */}
              <br /> Une formation pleine de rebondissements, où je me suis totalement épanoui ce qui a fait que conforter mes attentes envers ce métier.
              <br /> La finalité de cette formation était d&apos;être capable de développer la partie Front-end & Back-end d&apos;une {/* Correction ici */}
              application web ou web mobile en intégrant différentes recommandations et autres normes.
              <br />
              <br />
              <i className="fa-solid fa-trophy"></i> OBTENTION - du titre professionnel : Développeur web et web mobile. -
              Reconnu par l&apos;État et inscrit au répertoire national des certifications professionnelles (RNCP), de niveau 5
              (bac+2). {/* Correction ici */}
            </p>
            <br />
          </div>
          {/* Utilisation de Image de Next.js pour les images */}
          <Image
            src="/img/bureau.jpg" // Le chemin doit être relatif au dossier public
            alt="image de bureau"
            width={500}
            height={500}
            className="about-image" // Ajoutez des classes si nécessaire
          />
        </div>

        <div className="aboutBottom">
          {/* Utilisation de Image de Next.js pour les images */}
          <Image
            src="/img/cg-computer.jpg"
            alt="ordinateur avec ligne de code"
            width={500}
            height={500}
            className="about-image" // Ajoutez des classes si nécessaire
          />
          <div className="about">
            <div className="pattern-dots-sm">
              <span className="title-dots">
                <i className="fa-solid fa-code"></i>Mon futur, dans le développement web_
              </span>
            </div>
            <p>
              Je souhaite poursuivre mes études dans ce domaine pour approfondir mes connaissances et mettre en pratique
              les notions étudiées dès la rentrée prochaine avec le centre de formation MyDigitalSchool de Nantes en tant
              que développeur web pour un Bachelor 3 en alternance pendant un an.
              <br />
              <br />
              Rigoureux, autonome et déterminé, je recherche activement une entreprise en alternance pour y réaliser de
              beaux projets que ce soit seul ou en équipe. Toute expérience est gratifiante pour parvenir à mes objectifs
              professionnels. <br />
              Ayant connu le rythme de l&apos;alternance par mon passé, je suis convaincu de cette manière d&apos;apprendre. <br /> {/* Correction ici */}
              Je suis disponible sur Nantes 44 et ses alentours, ainsi que Cholet 49.
            </p>
          </div>
        </div>
      </section>

      {/* GIT */}
      <section id="git">
        <div className="pattern-dots-sm">
          <span className="title-dots">
            <i className="fa-solid fa-code"></i>L'outil de versionning Git_
          </span>
        </div>

        <div className="headGit">
          <h2>
            Comment j'utilise git <span>?</span>
          </h2>

          <Image
            src="/img/Git-White.png" // Le chemin doit être relatif au dossier public
            alt="git logo"
            width={100} // Spécifie la taille de l'image
            height={100}
            className="git-logo" // Ajoutez des classes si nécessaire
          />
        </div>

        <div className="containGit">
          <p>
            <i className="fa-solid fa-code-branch"></i> Pour pouvoir mener à bien mes projets, il est indispensable
            d'utiliser l'outil de versionning git !
          </p>
          <ul>
            <li>- Vérifier le statut de mes fichiers</li>
            <li>- Création de branches</li>
            <li>- Se déplacer dans les branches</li>
            <li>- Réaliser des commits</li>
            <li>- Push le projet sur GitHub</li>
          </ul>
        </div>
      </section>

      {/* MES COMPETENCES */}
      <section id="competences" className="competences">
        <h2 className="competences-title" data-aos="zoom-in" data-aos-duration="850">
          Mes compétences
        </h2>
        <p>
          Lors de ma formation de développeur et en réalisant des projets personnels en tant qu'autodidacte, <br />
          j'ai acquis différentes compétences dans le développement web.
        </p>

        <div className="skills">
          {/* Front-End Skills */}
          <div id="divFront" className="skills-item front">
            <div className="frontBg"></div>
            <div className="pattern-dots-sm">
              <h3>FRONT-END</h3>
            </div>
            <p>
              <i className="fa-regular fa-window-maximize"></i> Utilisation de logiciels tels que Photoshop, Figma
              pour la réalisation de Wireframes et autres ... <br /> <br />
              <i className="fa-solid fa-laptop-code"></i> Création et intégration de sites web pour DESKTOP et
              responsive pour MOBILE, accessibles et répondant aux normes. <br /> <br />
              <i className="fa-solid fa-terminal"></i> Les technologies que j'utilise sont : <br /> HTML, CSS,
              Javascript/Jquery, utilisation du framework Bootstrap, et VueJS
            </p>
          </div>

          {/* Iceberg illustration and Back-End title */}
          <div className="ice">
            <h3 id="front-end">FRONT</h3>
            {/* Utilisation de Image de Next.js pour les images */}
            <Image
              src="/img/iceberg.png" // Le chemin est relatif au dossier public
              alt="illustration iceberg"
              width={300} // Spécifie la taille de l'image
              height={300}
            />
            <h3 id="back-end">BACK</h3>
          </div>

          {/* Back-End Skills */}
          <div id="divBack" className="skills-item back">
              <div className="backBg"></div>
              <div className="pattern-dots-sm">
                <h3>BACK-END</h3>
              </div>
              <p>
                <i className="fa-solid fa-laptop-code"></i> Développement de sites web en PHP, création et gestion de
                bases de données, avec interaction en requêtes SQL. <br /> <br />
                <i className="fa-regular fa-file-code"></i> Pour obtenir des sites web dynamiques, création d'un CRUD
                pour le back-end, ces applications sont développées en favorisant la sécurité des bases de données ainsi
                que la protection des utilisateurs et de la gestion des rôles.
              </p>
            </div>
          </div>
        </section>

        {/* MY PROJECTS */}
        <div id="projet" className="projet">
          <h2 data-aos="zoom-in" data-aos-duration="750">Mes projets</h2>
          <p>
            Voici différents projets que j'ai réalisés seul, mais de nouveaux projets sont en cours de réalisation ...
          </p>
          <div className="projet-contain">
            {/* Projet 1 - Todo */}
            <a href="https://todo-cg.netlify.app" target="_blank" rel="noopener noreferrer">
              <div className="site3">
                <div className="overlay3">
                  <h2>Todo</h2>
                  <p>
                    <i className="fa-solid fa-circle-info"></i> Gestionnaire de listes de tâches (todo-list), Utilisation du localStorage
                  </p>
                  <p>
                    <i className="fa-solid fa-code"></i> Site créé à partir de ces langages :
                  </p>
                  <div className="langages">
                    <Image src="/img/htmllogo.png" alt="logo html" width={40} height={40} />
                    <Image src="/img/csslogo.png" alt="logo css" width={40} height={40} />
                    <Image src="/img/jslogo.png" alt="logo Javascript" width={40} height={40} />
                  </div>
                </div>
              </div>
            </a>

            {/* Projet 2 - Obélias */}
            <a href="http://obelias.epizy.com/index.php" target="_blank" rel="noopener noreferrer">
              <div className="site">
                <div className="overlay">
                  <h2>Obélias</h2>
                  <p><i className="fa-solid fa-circle-info"></i> Site FICTIF ! Projet e-commerce</p>
                  <p><i className="fa-solid fa-code"></i> Site créé à partir de ces langages :</p>
                  <div className="langages">
                    <Image src="/img/htmllogo.png" alt="logo html" width={40} height={40} />
                    <Image src="/img/csslogo.png" alt="logo css" width={40} height={40} />
                    <Image src="/img/phplogo.png" alt="logo php" width={40} height={40} />
                    <Image src="/img/mysqllogo.png" alt="logo mysql" width={40} height={40} />
                  </div>
                </div>
              </div>
            </a>

            {/* Projet 3 - Foot Camp */}
            <a href="http://foot-camp.epizy.com/index.php" target="_blank" rel="noopener noreferrer">
              <div className="site2">
                <div className="overlay2">
                  <h2>Foot Camp</h2>
                  <p><i className="fa-solid fa-circle-info"></i> Site FICTIF ! Projet e-commerce</p>
                  <p><i className="fa-solid fa-code"></i> Site créé à partir de ces langages :</p>
                  <div className="langages">
                    <Image src="/img/htmllogo.png" alt="logo html" width={40} height={40} />
                    <Image src="/img/csslogo.png" alt="logo css" width={40} height={40} />
                    <Image src="/img/bootstrap.png" alt="logo bootstrap" width={40} height={40} />
                    <Image src="/img/phplogo.png" alt="logo php" width={40} height={40} />
                    <Image src="/img/mysqllogo.png" alt="logo mysql" width={40} height={40} />
                  </div>
                </div>
              </div>
            </a>

            {/* Projet 4 - Game */}
            <a href="https://rpc-cg.netlify.app" target="_blank" rel="noopener noreferrer">
              <div className="site5">
                <div className="overlay5">
                  <h2>Game</h2>
                  <p><i className="fa-solid fa-circle-info"></i> Rock / Paper / Scissors</p>
                  <p><i className="fa-solid fa-code"></i> Site créé à partir de ces langages :</p>
                  <div className="langages">
                    <Image src="/img/htmllogo.png" alt="logo html" width={40} height={40} />
                    <Image src="/img/csslogo.png" alt="logo css" width={40} height={40} />
                    <Image src="/img/jslogo.png" alt="logo Javascript" width={40} height={40} />
                  </div>
                </div>
              </div>
            </a>
          </div>
      </div>
    </div>
  );
}
