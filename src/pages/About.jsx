import styled from 'styled-components';

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const HeroSection = styled.div`
  text-align: center;
  padding: 4rem 0;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
  background-size: cover;
  background-position: center;
  color: white;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
    color: #ffffff;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
    color: #ffffff;
`;

const Section = styled.section`
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  color: #333;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const Card = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const CardTitle = styled.h3`
  color: #4a90e2;
  margin-bottom: 1rem;
`;

const CardText = styled.p`
  color: #666;
  line-height: 1.6;
`;

const About = () => {
  return (
    <AboutContainer>
      <HeroSection>
        <Title>Notre Histoire</Title>
        <Subtitle>
          Découvrez l'histoire de ZharZen, un espace dédié au bien-être et à la paix intérieure
        </Subtitle>
      </HeroSection>

      <Section>
        <SectionTitle>Notre Mission</SectionTitle>
        <CardText>
          Fondé en 2018 par Sarah Chen et Michael Laurent, ZharZen est né d'une vision unique :
          fusionner la sagesse millénaire du yoga avec la richesse culturelle marocaine. Le nom "Zhar",
          qui signifie "chance" en arabe, reflète notre philosophie : chaque séance est une opportunité
          de transformation et de bien-être. Notre studio est un lieu où l'Orient rencontre l'Occident,
          où la tradition marocaine s'harmonise avec la pratique du yoga pour offrir une expérience
          unique et enrichissante.
        </CardText>
      </Section>

      <Section>
        <SectionTitle>Nos Valeurs</SectionTitle>
        <Grid>
          <Card>
            <CardTitle>Authenticité</CardTitle>
            <CardText>
              Nous puisons notre inspiration dans les traditions marocaines et yogiques authentiques,
              créant un espace où chaque détail, des couleurs aux arômes, raconte une histoire
              de fusion culturelle harmonieuse.
            </CardText>
          </Card>
          <Card>
            <CardTitle>Inclusivité</CardTitle>
            <CardText>
              Comme le "Zhar" qui apporte la chance à tous, notre studio accueille chacun,
              quel que soit son niveau, son âge ou son origine, dans un esprit d'hospitalité
              typiquement marocain.
            </CardText>
          </Card>
          <Card>
            <CardTitle>Communauté</CardTitle>
            <CardText>
              Inspirés par la chaleur des riads marocains, nous cultivons un esprit de communauté
              où chaque personne peut se sentir soutenue et encouragée dans sa pratique personnelle.
            </CardText>
          </Card>
        </Grid>
      </Section>

      <Section>
        <SectionTitle>Notre Équipe</SectionTitle>
        <Grid>
          <Card>
            <CardTitle>Sarah Chen</CardTitle>
            <CardText>
              Fondatrice et instructrice principale. Passionnée par la fusion des cultures,
              elle a étudié le yoga en Inde et la culture marocaine à Marrakech.
            </CardText>
          </Card>
          <Card>
            <CardTitle>Michael Laurent</CardTitle>
            <CardText>
              Co-fondateur et expert en yoga thérapeutique. Son approche intègre les
              bienfaits des plantes et épices marocaines dans la pratique.
            </CardText>
          </Card>
          <Card>
            <CardTitle>Emma Rodriguez</CardTitle>
            <CardText>
              Instructrice de Vinyasa Flow. Elle crée des séquences dynamiques inspirées
              des mouvements fluides de la danse orientale marocaine.
            </CardText>
          </Card>
        </Grid>
      </Section>
    </AboutContainer>
  );
};

export default About; 