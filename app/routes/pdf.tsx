import { Page, Text, View, Document, StyleSheet, Font, PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import { useEffect, useState } from 'react';

const ShowPdf = () => {
    Font.register({
        family: 'Oswald',
        src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
    });

    const styles = StyleSheet.create({
        body: {
            paddingTop: 35,
            paddingBottom: 65,
            paddingHorizontal: 35,
        },
        title: {
            fontSize: 24,
            textAlign: 'center',
            fontFamily: 'Oswald'
        },
        subtitle: {
            marginTop: "10px",
            fontSize: 12,
            textAlign: 'center',
            color: 'grey',
            width: "100%"
        },
        header: {
            marginTop: "15px",
            backgroundColor: "#6366f1",
            paddingVertical: '8px',
            fontSize: "14px",
            color: "#ffffff",
            textAlign: "center",
            fontWeight: "medium"
        },
        myflex: {
            marginVertical: "4px",
            border: "2px solid #6b7280",
            padding: "4px"
        },
        text1: {
            fontSize: "14px",
            fontWeight: 'medium',
            marginBottom: "4px",
            color: "#030712"
        },
        text2: {
            fontSize: "12px",
            fontWeight: 'semibold',
            color: "#374151"
        },
        divider: {
            width: "100%",
            height: "1px",
            backgroundColor: "#6b7280",
            marginVertical: "2px"
        }
    });


    const Quixote = () => (
        <Document>
            <Page style={styles.body} size={'A4'}>
                <View>
                    <Text style={styles.title}>Land Section</Text>
                </View>
                <View>
                    <Text style={styles.subtitle} fixed>
                        SUBJECT  :  Comments of pda on land related documents.
                    </Text>
                </View>
                <View>
                    <Text style={styles.header}>
                        1. Applicant Details(s)
                    </Text>
                </View>
                <View style={styles.myflex}>
                    <Text style={styles.text1}>
                        1.1 Applicant Name
                    </Text>
                    <View style={styles.divider}></View>
                    <Text style={styles.text2}>
                        sombra
                    </Text>
                </View>
                <View style={styles.myflex}>
                    <Text style={styles.text1}>
                        1.2 Applicant Contact Number
                    </Text>
                    <View style={styles.divider}></View>
                    <Text style={styles.text2}>
                        Applicant details
                    </Text>
                </View>
                <View style={styles.myflex}>
                    <Text style={styles.text1}>
                        1.3 Applicant Survey Number
                    </Text>
                    <View style={styles.divider}></View>
                    <Text style={styles.text2}>
                        Applicant details
                    </Text>
                </View>
                <View style={styles.myflex}>
                    <Text style={styles.text1}>
                        1.4 Applicant Contact Number
                    </Text>
                    <View style={styles.divider}></View>
                    <Text style={styles.text2}>
                        Applicant Village
                    </Text>
                </View>
                <View style={styles.myflex}>
                    <Text style={styles.text1}>
                        1.5 Applicant Contact Number
                    </Text>
                    <View style={styles.divider}></View>
                    <Text style={styles.text2}>
                        Applicant details
                    </Text>
                </View>
                <View style={styles.myflex}>
                    <Text style={styles.text1}>
                        1.6 Applicant Area
                    </Text>
                    <View style={styles.divider}></View>
                    <Text style={styles.text2}>
                        Applicant details
                    </Text>
                </View>
                <View>
                    <Text style={styles.header}>
                        2. Site Details
                    </Text>
                </View>
                <View style={styles.myflex}>
                    <Text style={styles.text1}>
                        2.1 Applicant Area
                    </Text>
                    <View style={styles.divider}></View>
                    <Text style={styles.text2}>
                        Applicant details
                    </Text>
                </View>
                <View style={styles.myflex}>
                    <Text style={styles.text1}>
                        2.2 Applicant Area
                    </Text>
                    <View style={styles.divider}></View>
                    <Text style={styles.text2}>
                        Applicant details
                    </Text>
                </View>
                <View style={styles.myflex}>
                    <Text style={styles.text1}>
                        2.3 Applicant Area
                    </Text>
                    <View style={styles.divider}></View>
                    <Text style={styles.text2}>
                        Applicant details
                    </Text>
                </View>
                <View style={styles.myflex}>
                    <Text style={styles.text1}>
                        2.4 Applicant Area
                    </Text>
                    <View style={styles.divider}></View>
                    <Text style={styles.text2}>
                        Applicant details
                    </Text>
                </View>
                <View style={styles.myflex}>
                    <Text style={styles.text1}>
                        2.5 Applicant Area
                    </Text>
                    <View style={styles.divider}></View>
                    <Text style={styles.text2}>
                        Applicant details
                    </Text>
                </View>
                <View style={styles.myflex}>
                    <Text style={styles.text1}>
                        2.6 Applicant Area
                    </Text>
                    <View style={styles.divider}></View>
                    <Text style={styles.text2}>
                        Applicant details
                    </Text>
                </View>
                <View style={styles.myflex}>
                    <Text style={styles.text1}>
                        2.7 Applicant Area
                    </Text>
                    <View style={styles.divider}></View>
                    <Text style={styles.text2}>
                        Applicant details
                    </Text>
                </View>
                <View style={styles.myflex}>
                    <Text style={styles.text1}>
                        2.8 Applicant Area
                    </Text>
                    <View style={styles.divider}></View>
                    <Text style={styles.text2}>
                        Applicant details
                    </Text>
                </View>
                <View style={styles.myflex}>
                    <Text style={styles.text1}>
                        2.9 Applicant Area
                    </Text>
                    <View style={styles.divider}></View>
                    <Text style={styles.text2}>
                        Applicant details
                    </Text>
                </View>
                <View style={styles.myflex}>
                    <Text style={styles.text1}>
                        2.10 Applicant Area
                    </Text>
                    <View style={styles.divider}></View>
                    <Text style={styles.text2}>
                        Applicant details
                    </Text>
                </View>
                <View style={styles.myflex}>
                    <Text style={styles.text1}>
                        2.11 Applicant Area
                    </Text>
                    <View style={styles.divider}></View>
                    <Text style={styles.text2}>
                        Applicant details
                    </Text>
                </View>
            </Page>
        </Document >
    );


    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    const download = () => {
        <PDFDownloadLink document={<Quixote />} fileName="somename.pdf">
            {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
        </PDFDownloadLink>
    }

    const [pdfFile, setPdfFile] = useState<File>();

    return (
        <>
            <div className='grid place-items-center'>
                <button className='text-white bg-cyan-500 px-4 py-1 rounded-md my-2'>Download</button>
            </div>
            {isClient ?
                <div className='w-full h-scree'>
                    {/* <PDFViewer width={"100%"} height={"100vh"}> */}
                    <PDFViewer style={{ width: '100%', height: '100vh' }}>
                        <Quixote />
                    </PDFViewer>
                </div>
                : null}

        </>
    );
}

export default ShowPdf;