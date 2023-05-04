import courses from './courses';
import studyGroups from './studyGroups';

type Course = {
  id: number; 
  studyGroupId: number;
  title: string; 
  keywords: string[]; 
  eventType: string; 
  };

type StudyGroup = {
  id: number; 
  courseId: number;
  title: string; 
  keywords: string[]; 
  eventType: string; 
  };

type SearchEventsOptions = {
  query: string | number,
  eventType: 'courses' | 'groups'
}

function searchEvents(options: SearchEventsOptions){
  const events: (Course | StudyGroup)[] = options.eventType === 'courses' ? courses : studyGroups;
  return events.filter((event: Course | StudyGroup) => {
    if(typeof options.query === 'number') {
      return options.query === event.id;
      /*if(event.id === options.query){
        return true;
      };*/
    };
    if(typeof options.query === 'string'){
      return event.keywords.includes(options.query);
    };
  });
  /** let events = studyGroups;
  if(options.eventType === 'courses'){
    events = courses;
  };
*/
};
let searchResults = searchEvents({query: 'art', eventType: 'courses'});
//console.log(searchResults);
let enrolledEvents: (Course | StudyGroup)[] = [];

function enroll(event: Course | StudyGroup) {
  enrolledEvents = [...enrolledEvents, event];
};
/**Allow the enroll() function to take in a list of courses and add them all to enrolledEvents.
Add another function that allows you to drop a course.
Add another function that prints only the titles of your enrolled events. */

enroll(searchResults[0]);

console.log(enrolledEvents);