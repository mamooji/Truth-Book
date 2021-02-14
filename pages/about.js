import Layout from "../components/layout";

export default function About() {
  return (
    <Layout>
      <div
        style={{
          backgroundColor: "rgb(112,168,251)",
          objectFit: "cover",
          width: "100vw",
          height: "100%",
          position: "fixed",
          top: 0,
          left: 0,
        }}
      >
        <h1
          style={{
            fontSize: "3vh",
            letterSpacing: "0.5vw",
            textAlign: "center",
            textTransform: "uppercase",
            paddingTop: "10vh",
            color: "white",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          About this application
        </h1>
        <br />
        <p
          style={{
            fontSize: "1.8vh",
            textAlign: "center",
            font: "syncopate, sans serif",
            paddingLeft: "3vw",
            paddingRight: "3vw",
            color: "white",
          }}
        >
          This application allows users to have a way of keeping track of daily,
          weekly, monthly or even yearly tasks or goals they want to accomplish.
          With this application a user can create a goal with a name,
          description/milestones, and how often they want to complete this goal.
          Once the user has inputted this information it will create a Goal card
          based on this goal. For example, if someone who is an avid smoker
          wants to try quitting but hasn't been able to, this app gives them the
          opportunity to reflect on any decisisons they may have taken, and
          continue to meet their goal, while also being able to review any times
          they may have not met it, and reflect on it. This application allows
          users to have multiple goals set, and shows a calender history of all
          of the times their goal has been achieved, or failed. This can be used
          for something as simple as a reminder to take out the garbage on
          Sunday night, to overcoming habits or challenging circumstances.
        </p>

        <div
          style={{
            textAlign: "center",
            alignContent: "center",
            alignItems: "center",
            paddingTop: "6vh",
            display: "block",
          }}
        >
          <img
            src="/images/Logo.png"
            alt="logo"
            style={{
              height: "15vw",
              display: "inline",
            }}
          />
        </div>
      </div>
    </Layout>
  );
}
