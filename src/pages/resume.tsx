import Head from "next/head";
import Header from "@/components/Header";
import { Box, Button, Grid, Typography } from "@mui/material";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import Link from "next/link";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Layout from "@/components/Layout";

export default function Resume() {
    return (
        <>
            <Head>
                <title>KT - Portfolio</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Grid container pl={4} pt={4}>
                    <Grid item>

                        <Box
                            sx={{
                                position: "relative",
                            }}
                        >
                            <Typography
                                component="h5"
                                variant="h5"
                                color="inherit"
                                sx={{ fontWeight: 'bold' }}
                                paragraph
                            >
                                略歴
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                position: "relative",
                                paddingBottom: 4,
                                fontSize: 16
                            }}
                        >
                            <Typography
                                component="h6"
                                variant="h6"
                                color="inherit"
                                paragraph
                            >
                                社会人
                            </Typography>
                            <ul>
                                <li>
                                    株式会社ドリームキャリア 2023/4 ~ now
                                    <ul>
                                        <li>Amazon納品管理・倉庫管理の自動化ツール開発</li>
                                        <li>新規Webサービスの企画・設計・開発</li>
                                    </ul>
                                </li>
                            </ul>
                        </Box>

                        <Box
                            sx={{
                                position: "relative",
                                paddingBottom: 4,
                                fontSize: 16
                            }}
                        >
                            <Typography
                                component="h6"
                                variant="h6"
                                color="inherit"
                                paragraph
                            >
                                学生
                            </Typography>
                            <ul>
                                <li style={{ paddingBottom: "10px" }}>
                                    株式会社Reignite Entertainment 2021/5 ~ 2022/2
                                    <ul>
                                        <li>
                                            配信画面にスコアを表示するアプリケーション開発・デザイン (
                                            <a target="_blank" href="https://youtu.be/QJTiNbyKuaE?t=15587">
                                                大会結果シーン Youtube
                                                <OpenInNewIcon sx={{ verticalAlign: "middle" }} fontSize={"inherit"} />
                                            </a>
                                            )
                                        </li>
                                        <li>
                                            配信画面にTwitterのツイートを表示するアプリケーション開発・デザイン (
                                            <a target="_blank" href="https://youtu.be/QJTiNbyKuaE?t=819">
                                                ツイート表示シーン Youtube
                                                <OpenInNewIcon sx={{ verticalAlign: "middle" }} fontSize={"inherit"} />
                                            </a>
                                            )
                                        </li>
                                        <li>Twitterのツイートをリツイートしたユーザーの一覧を取得するツール開発</li>
                                    </ul>
                                </li>
                                <li>
                                    個人クライアント 2017/8 ~ 2020/6
                                    <ul>
                                        <li>Minecraftのサーバー向けプラグイン開発</li>
                                        <li>サーバー構築・運用のサポート</li>
                                    </ul>
                                </li>
                            </ul>
                        </Box>
                    </Grid>
                    <Grid item container justifyContent="center" pb={4}>
                        <Button variant="contained" LinkComponent={Link} href="/" startIcon={<ArrowLeftIcon />}>
                            About
                        </Button>
                    </Grid>
                </Grid>

            </main >
        </>
    );
}


Resume.getLayout = function getLayout(page: any) {
    return (
        <>
            <Layout>
                {page}
            </Layout>
        </>
    )
}
