const doctorsData = [
    {
      name: 'Dr. Stella Th',
      specialty: 'Ophthalmology',
      imageSource: "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?size=626&ext=jpg&ga=GA1.2.133859331.1694096780&semt=sph",
      aboutMe: 'Dr. Carly Angel is the top most immunologists specialist...',
      rating: '5.0',
      reviews: '332',
      patients: '658+',
      yearsExpert: '11+',
      hospital: 'Mars Hospital',
      dayOfMonth:["12","13","15","16"] ,
      dayOfWeek: ["Fri","Sat","Mon","Tues"],
      timeSlots: ["9:00 AM", "11:30 AM", "2:00 PM", "4:30 PM"],
    },
    {
      name: 'Dr. John Smith',
      specialty: 'Cardiology',
      imageSource:"https://img.freepik.com/free-photo/smiling-doctor-with-strethoscope-isolated-grey_651396-974.jpg?size=626&ext=jpg&ga=GA1.2.133859331.1694096780&semt=sph",
      aboutMe: 'Dr. John Smith specializes in cardiology and has over 15 years of experience...',
      rating: '4.8',
      reviews: '280',
      patients: '590+',
      yearsExpert: '15+',
      hospital: 'HeartCare Clinic',
      dayOfMonth:["12","13","15","16"] ,
      dayOfWeek: ["Fri","Sat","Mon","Tues"],
      timeSlots: ["10:00 AM", "1:30 PM", "3:00 PM", "5:30 PM"],
    },
    {
      name: 'Dr. Sarah Adams',
      specialty: 'Dermatology',
      imageSource:"https://img.freepik.com/premium-photo/medical-concept-asian-beautiful-female-doctor-white-coat-with-glasses-waist-high-medical-student-female-hospital-worker-looks-into-camera-smiles-studio-blue-background_185696-615.jpg?size=626&ext=jpg&ga=GA1.2.133859331.1694096780&semt=sph",
      aboutMe: 'Dr. Sarah Adams is a renowned dermatologist known for her expertise in skin care...',
      rating: '4.9',
      reviews: '420',
      patients: '720+',
      yearsExpert: '10+',
      hospital: 'SkinCare Clinic',
      dayOfMonth:["12","13","15","16"] ,
      dayOfWeek: ["Fri","Sat","Mon","Tues"],
      timeSlots: ["8:30 AM", "11:00 AM", "1:30 PM", "4:00 PM"],
    },
    {
      name: 'Dr. Michael Johnson',
      specialty: 'Orthopedics',
      imageSource: "https://img.freepik.com/premium-photo/portrait-happy-successful-hindu-doctor-young-medical-practitioner-smiling-looking_321831-17342.jpg?size=626&ext=jpg&ga=GA1.2.133859331.1694096780&semt=sph",
      aboutMe: 'Dr. Michael Johnson is a skilled orthopedic surgeon with a focus on joint replacements...',
      rating: '4.7',
      reviews: '210',
      patients: '450+',
      yearsExpert: '12+',
      hospital: 'OrthoCare Hospital',
      dayOfMonth:["12","13","15","16"] ,
      dayOfWeek: ["Fri","Sat","Mon","Tues"],
      timeSlots: ["9:30 AM", "12:00 PM", "3:30 PM", "6:00 PM"],
    },
    {
      name: 'Dr. Emily White',
      specialty: 'Pediatrics',
      imageSource: "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?size=626&ext=jpg&ga=GA1.2.133859331.1694096780&semt=sph",
      aboutMe: 'Dr. Emily White is a compassionate pediatrician known for her dedication to children’s health...',
      rating: '4.9',
      reviews: '380',
      patients: '690+',
      yearsExpert: '14+',
      hospital: 'ChildCare Clinic',
      dayOfMonth:["12","13","15","16"] ,
      dayOfWeek: ["Fri","Sat","Mon","Tues"],
      timeSlots: ["10:30 AM", "1:00 PM", "2:30 PM", "4:00 PM"],
    },
    {
      name: 'Dr. William Brown',
      specialty: 'Gynecology',
      imageSource: "https://img.freepik.com/premium-photo/smiling-middleaged-indian-doctor-standing-medical-uniform-against-hospital-backgroundcreated-with-generative-ai-technology_132358-14444.jpg?size=626&ext=jpg&ga=GA1.2.133859331.1694096780&semt=sph",
      aboutMe: 'Dr. William Brown is a renowned gynecologist known for his expertise in women’s health...',
      rating: '4.8',
      reviews: '310',
      patients: '540+',
      yearsExpert: '13+',
      hospital: "'Women's Health Center'",
      dayOfMonth:["12","13","15","16"] ,
      dayOfWeek: ["Fri","Sat","Mon","Tues"],
      timeSlots: ["9:00 AM", "11:30 AM", "2:00 PM", "4:30 PM"],
    },
    {
      name: 'Dr. Jessica Lee',
      specialty: 'Dentistry',
      imageSource: "https://img.freepik.com/free-photo/portrait-doctor_144627-39390.jpg?size=626&ext=jpg&ga=GA1.2.133859331.1694096780&semt=sph",
      aboutMe: 'Dr. Jessica Lee is a skilled dentist known for her gentle approach to dental care...',
      rating: '4.9',
      reviews: '360',
      patients: '620+',
      yearsExpert: '11+',
      hospital: 'SmileCare Dental Clinic',
      dayOfMonth:["12","13","15","16"] ,
      dayOfWeek: ["Fri","Sat","Mon","Tues"],
      timeSlots: ["10:00 AM", "1:30 PM", "3:00 PM", "5:30 PM"],
    },
    {
      name: 'Dr. Richard Taylor',
      specialty: 'Neurology',
      imageSource: "https://img.freepik.com/premium-photo/doctor_173387-3049.jpg?size=626&ext=jpg&ga=GA1.2.133859331.1694096780&semt=sph",
      aboutMe: 'Dr. Richard Taylor is a respected neurologist known for his expertise in neurological disorders...',
      rating: '4.7',
      reviews: '250',
      patients: '480+',
      yearsExpert: '14+',
      hospital: 'NeuroCare Hospital',
      dayOfMonth:["12","13","15","16"] ,
      dayOfWeek: ["Fri","Sat","Mon","Tues"],
      timeSlots: ["8:30 AM", "11:00 AM", "1:30 PM", "4:00 PM"],
    },
    {
      name: 'Dr. Laura Davis',
      specialty: 'Psychiatry',
      imageSource: "https://img.freepik.com/premium-photo/woman-white-lab-coat-with-stethoscope-her-neck-stands-hospital_889227-23106.jpg?size=626&ext=jpg&ga=GA1.2.133859331.1694096780&semt=sph",
      aboutMe: 'Dr. Laura Davis is a compassionate psychiatrist known for her dedication to mental health...',
      rating: '4.9',
      reviews: '430',
      patients: '710+',
      yearsExpert: '12+',
      hospital: 'Mental Wellness Clinic',
      dayOfMonth:["12","13","15","16"] ,
      dayOfWeek: ["Fri","Sat","Mon","Tues"],
      timeSlots: ["9:30 AM", "12:00 PM", "3:30 PM", "6:00 PM"],
    },
    {
      name: 'Dr. Daniel Clark',
      specialty: 'Urology',
      imageSource: "https://img.freepik.com/free-photo/doctor-with-co-workers-analyzing-x-ray_1098-581.jpg?size=626&ext=jpg&ga=GA1.2.133859331.1694096780&semt=sph",
      aboutMe: 'Dr. Daniel Clark is a highly skilled urologist known for his expertise in urological conditions...',
      rating: '4.8',
      reviews: '300',
      patients: '560+',
      yearsExpert: '13+',
      hospital: 'UroCare Clinic',
      dayOfMonth:["12","13","15","16"] ,
      dayOfWeek: ["Fri","Sat","Mon","Tues"],
      timeSlots: ["9:00 AM", "11:30 AM", "2:00 PM", "4:30 PM"],
    },
    // You can add more doctors with similar data format
  ];
  
  export default doctorsData;
  