// // 'use client';

// // import { useEffect, useState } from 'react';
// // import { database } from '@/lib/firebaseconfig';
// // import { ref, get, query } from 'firebase/database';

// // export default function EditableTextPage() {
// //   const [texts, setTexts] = useState<{ text: string }[]>([]);

// //   const getData = async () => {
// //     const pageRef = ref(database, 'pagecontent/page1');
// //     const pageQuery = query(pageRef);
// //     try {
// //       const snapshot = await get(pageQuery);
// //       if (snapshot.exists()) {
// //         const fetchedData = snapshot.val();
// //         // Filter only items with a 'text' key
// //         const filtered = Array.isArray(fetchedData)
// //           ? fetchedData.filter((item) => item?.text)
// //           : Object.values(fetchedData).filter((item: any) => item?.text);

// //         setTexts(filtered);
// //       } else {
// //         console.log('No data found for page1.');
// //       }
// //     } catch (error) {
// //       console.error('Error fetching data:', error);
// //     }
// //   };

// //   useEffect(() => {
// //     getData();
// //   }, []);

// //   return (
// //     <div style={{ padding: '20px', width:'70%', height:'70%', overflow:"scroll" }}>
// //       <h1>Edit Text Content</h1>
// //       {texts.map((item, index) => (
// //         <div key={index} style={{ marginBottom: '20px' }}>
// //           <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px' }}>
// //             Text Block {index + 1}:
// //           </label>
// //           <textarea
// //             defaultValue={item.text}
// //             rows={4}
// //             style={{
// //               width: '100%',
// //               padding: '10px',
// //               fontSize: '16px',
// //               borderRadius: '8px',
// //               border: '1px solid #ccc',
// //             }}
// //           />
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }


// 'use client';

// import { useEffect, useState } from 'react';
// import { database } from '@/lib/firebaseconfig';
// import { ref, get, set, query } from 'firebase/database';

// export default function EditableTextPage() {
//   const [texts, setTexts] = useState<{ text: string }[]>([]);
//   const [loading, setLoading] = useState(false);

//   const getData = async () => {
//     const pageRef = ref(database, 'pagecontent/page1');
//     const pageQuery = query(pageRef);
//     try {
//       const snapshot = await get(pageQuery);
//       if (snapshot.exists()) {
//         const fetchedData = snapshot.val();
//         const filtered = Array.isArray(fetchedData)
//           ? fetchedData.filter((item) => item?.text)
//           : Object.values(fetchedData).filter((item: any) => item?.text);

//         setTexts(filtered);
//       } else {
//         console.log('No data found for page1.');
//       }
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const handleTextChange = (index: number, newText: string) => {
//     setTexts((prev) =>
//       prev.map((item, i) => (i === index ? { ...item, text: newText } : item))
//     );
//   };

//   const handleSave = async () => {
//     setLoading(true);
//     try {
//       const pageRef = ref(database, 'pagecontent/page1');
//       await set(pageRef, texts);
//       alert('Data saved successfully!');
//     } catch (error) {
//       console.error('Error saving data:', error);
//       alert('Failed to save data.');
//     }
//     setLoading(false);
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   return (
//     <div style={{ padding: '20px', width: '70%', height: '70%', overflow: 'scroll' }}>
//       <h1>Edit Text Content</h1>
//       {texts.map((item, index) => (
//         <div key={index} style={{ marginBottom: '20px' }}>
//           <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px' }}>
//             Text Block {index + 1}:
//           </label>
//           <textarea
//             value={item.text}
//             onChange={(e) => handleTextChange(index, e.target.value)}
//             rows={4}
//             style={{
//               width: '100%',
//               padding: '10px',
//               fontSize: '16px',
//               borderRadius: '8px',
//               border: '1px solid #ccc',
//             }}
//           />
//         </div>
//       ))}

//       <button
//         onClick={handleSave}
//         disabled={loading}
//         style={{
//           padding: '12px 24px',
//           backgroundColor: '#0070f3',
//           color: '#fff',
//           border: 'none',
//           borderRadius: '8px',
//           fontSize: '16px',
//           cursor: 'pointer',
//         }}
//       >
//         {loading ? 'Saving...' : 'Save All'}
//       </button>
//     </div>
//   );
// }


// 'use client';

// import { useEffect, useState } from 'react';
// import { database } from '@/lib/firebaseconfig';
// import { ref, get, set, query } from 'firebase/database';

// export default function EditableTextPage() {
//   const [pageKeys, setPageKeys] = useState<string[]>([]);
//   const [selectedPage, setSelectedPage] = useState<string>('page1');
//   const [texts, setTexts] = useState<{ text: string }[]>([]);
//   const [loading, setLoading] = useState(false);

//   const fetchPageKeys = async () => {
//     const pageContentRef = ref(database, 'pagecontent');
//     try {
//       const snapshot = await get(query(pageContentRef));
//       if (snapshot.exists()) {
//         const keys = Object.keys(snapshot.val());
//         setPageKeys(keys);
//         if (!selectedPage && keys.length > 0) {
//           setSelectedPage(keys[0]);
//         }
//       }
//     } catch (error) {
//       console.error('Error fetching page keys:', error);
//     }
//   };

//   const getData = async (pageKey: string) => {
//     const pageRef = ref(database, `pagecontent/${pageKey}`);
//     try {
//       const snapshot = await get(query(pageRef));
//       if (snapshot.exists()) {
//         const fetchedData = snapshot.val();
//         const filtered = Array.isArray(fetchedData)
//           ? fetchedData.filter((item) => item?.text)
//           : Object.values(fetchedData).filter((item: any) => item?.text);
//         setTexts(filtered);
//       } else {
//         console.log(`No data found for ${pageKey}.`);
//         setTexts([]);
//       }
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const handleTextChange = (index: number, newText: string) => {
//     setTexts((prev) =>
//       prev.map((item, i) => (i === index ? { ...item, text: newText } : item))
//     );
//   };

//   const handleSave = async () => {
//     if (!selectedPage) return;
//     setLoading(true);
//     try {
//       const pageRef = ref(database, `pagecontent/${selectedPage}`);
//       await set(pageRef, texts);
//       alert('Data saved successfully!');
//     } catch (error) {
//       console.error('Error saving data:', error);
//       alert('Failed to save data.');
//     }
//     setLoading(false);
//   };

//   const handlePageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const newPage = e.target.value;
//     setSelectedPage(newPage);
//     getData(newPage);
//   };

//   useEffect(() => {
//     fetchPageKeys();
//   }, []);

//   useEffect(() => {
//     if (selectedPage) {
//       getData(selectedPage);
//     }
//   }, [selectedPage]);

//   return (
//     <div style={{ padding: '20px', width: '70%', height: '70%', overflow: 'scroll' }}>
//       <h1>Edit Text Content</h1>

//       <label style={{ fontWeight: 'bold', marginBottom: '10px', display: 'block' }}>
//         Select Page:
//       </label>
//       <select
//         value={selectedPage}
//         onChange={handlePageChange}
//         style={{
//           padding: '10px',
//           marginBottom: '20px',
//           borderRadius: '8px',
//           border: '1px solid #ccc',
//           fontSize: '16px',
//         }}
//       >
//         {pageKeys.map((key) => (
//           <option key={key} value={key}>
//             {key}
//           </option>
//         ))}
//       </select>

//       {texts.map((item, index) => (
//         <div key={index} style={{ marginBottom: '20px' }}>
//           <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px' }}>
//             Text Block {index + 1}:
//           </label>
//           <textarea
//             value={item.text}
//             onChange={(e) => handleTextChange(index, e.target.value)}
//             rows={4}
//             style={{
//               width: '100%',
//               padding: '10px',
//               fontSize: '16px',
//               borderRadius: '8px',
//               border: '1px solid #ccc',
//             }}
//           />
//         </div>
//       ))}

//       <button
//         onClick={handleSave}
//         disabled={loading}
//         style={{
//           padding: '12px 24px',
//           backgroundColor: '#0070f3',
//           color: '#fff',
//           border: 'none',
//           borderRadius: '8px',
//           fontSize: '16px',
//           cursor: 'pointer',
//         }}
//       >
//         {loading ? 'Saving...' : 'Save All'}
//       </button>
//     </div>
//   );
// }





'use client';

import { useEffect, useState } from 'react';
import { database } from '@/lib/firebaseconfig';
import { ref, get, set, query } from 'firebase/database';

type TextItem = {
    text: string;
  };


export default function EditableTextPage() {
  const [pageKeys, setPageKeys] = useState<string[]>([]);
  const [selectedPage, setSelectedPage] = useState<string>('page1');
  const [texts, setTexts] = useState<TextItem[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchPageKeys = async () => {
    const pageContentRef = ref(database, 'pagecontent');
    try {
      const snapshot = await get(query(pageContentRef));
      if (snapshot.exists()) {
        const keys = Object.keys(snapshot.val());
        setPageKeys(keys);
        if (!selectedPage && keys.length > 0) {
          setSelectedPage(keys[0]);
        }
      }
    } catch (error) {
      console.error('Error fetching page keys:', error);
    }
  };

//   const getData = async (pageKey: string) => {
//     const pageRef = ref(database, `pagecontent/${pageKey}`);
//     try {
//       const snapshot = await get(query(pageRef));
//       if (snapshot.exists()) {
//         const fetchedData = snapshot.val();
//         const filtered = Array.isArray(fetchedData)
//           ? fetchedData.filter((item) => item?.text)
//           : Object.values(fetchedData).filter((item) => item?.text);
//         setTexts(filtered);
//       } else {
//         console.log(`No data found for ${pageKey}.`);
//         setTexts([]);
//       }
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };


const getData = async (pageKey: string) => {
    const pageRef = ref(database, `pagecontent/${pageKey}`);
    try {
      const snapshot = await get(query(pageRef));
      if (snapshot.exists()) {
        const fetchedData = snapshot.val();
        const filtered = Array.isArray(fetchedData)
          ? fetchedData.filter((item: TextItem) => item?.text)
          : Object.values(fetchedData as Record<string, TextItem>).filter((item) => item?.text);
        setTexts(filtered);
      } else {
        console.log(`No data found for ${pageKey}.`);
        setTexts([]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  
  const handleTextChange = (index: number, newText: string) => {
    setTexts((prev) =>
      prev.map((item, i) => (i === index ? { ...item, text: newText } : item))
    );
  };

  const handleSave = async () => {
    if (!selectedPage) return;
    setLoading(true);
    try {
      const pageRef = ref(database, `pagecontent/${selectedPage}`);
      await set(pageRef, texts);
      alert('Data saved successfully!');
    } catch (error) {
      console.error('Error saving data:', error);
      alert('Failed to save data.');
    }
    setLoading(false);
  };

  const handlePageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newPage = e.target.value;
    setSelectedPage(newPage);
    getData(newPage);
  };

  useEffect(() => {
    fetchPageKeys();
  }, []);

  useEffect(() => {
    if (selectedPage) {
      getData(selectedPage);
    }
  }, [selectedPage]);

  return (
    <div style={{ padding: '20px', width: '70%', height: '70%', overflow: 'scroll' }}>
      <h1>Edit Text Content</h1>

      <label style={{ fontWeight: 'bold', marginBottom: '10px', display: 'block' }}>
        Select Page:
      </label>
      <select
        value={selectedPage}
        onChange={handlePageChange}
        style={{
          padding: '10px',
          marginBottom: '20px',
          borderRadius: '8px',
          border: '1px solid #ccc',
          fontSize: '16px',
        }}
      >
        {pageKeys.map((key) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>

      {texts.map((item, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px' }}>
            Text Block {index + 1}:
          </label>
          <textarea
            value={item.text}
            onChange={(e) => handleTextChange(index, e.target.value)}
            rows={4}
            style={{
              width: '100%',
              padding: '10px',
              fontSize: '16px',
              borderRadius: '8px',
              border: '1px solid #ccc',
            }}
          />
        </div>
      ))}

      <button
        onClick={handleSave}
        disabled={loading}
        style={{
          padding: '12px 24px',
          backgroundColor: '#0070f3',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          fontSize: '16px',
          cursor: 'pointer',
        }}
      >
        {loading ? 'Saving...' : 'Save All'}
      </button>
    </div>
  );
}

