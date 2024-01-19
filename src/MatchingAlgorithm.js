// Sample dataset
const mentors = [
    { id: 1, name: 'John Doe', expertise: 'Web Development', availability: ['Monday', 'Wednesday'] },
    { id: 2, name: 'Jane Smith', expertise: 'Data Science', availability: ['Tuesday', 'Thursday'] },
    { id: 3, name: 'Bob Johnson', expertise: 'Networking', availability: ['Monday', 'Wednesday', 'Friday'] },
    { id: 4, name: 'Alice Wilson', expertise: 'UX Design', availability: ['Thursday', 'Friday'] },
    { id: 5, name: 'Chris Brown', expertise: 'Mobile App Development', availability: ['Monday', 'Tuesday'] },
  ];
  
  const mentees = [
    { id: 101, name: 'Alex Thompson', interests: 'Web Development', availability: ['Monday', 'Wednesday'] },
    { id: 102, name: 'Sophie Turner', interests: 'Data Science', availability: ['Tuesday', 'Thursday'] },
    { id: 103, name: 'Charlie Harris', interests: 'UX Design', availability: ['Wednesday', 'Friday'] },
    { id: 104, name: 'Emma Parker', interests: 'Mobile App Development', availability: ['Monday', 'Tuesday'] },
    { id: 105, name: 'Ryan Miller', interests: 'Networking', availability: ['Monday', 'Friday'] },
  ];
  
  // Matching algorithm
  function matchMentorsAndMentees(mentors, mentees) {
    const matches = [];
  
    for (const mentee of mentees) {
      const potentialMentors = mentors.filter(
        (mentor) =>
          mentor.expertise === mentee.interests &&
          mentor.availability.some((day) => mentee.availability.includes(day))
      );
  
      if (potentialMentors.length > 0) {
        matches.push({ mentee, mentors: potentialMentors });
      }
    }
  
    return matches;
  }
  
  // Run the matching algorithm
  const matchedPairs = matchMentorsAndMentees(mentors, mentees);
  
  // Display the matched pairs
  console.log('Matched pairs:');
  matchedPairs.forEach((match) => {
    console.log(`Mentee: ${match.mentee.name}`);
    console.log('Mentors:');
    match.mentors.forEach((mentor) => {
      console.log(`- ${mentor.name}`);
    });
    console.log('------------------');
  });
  