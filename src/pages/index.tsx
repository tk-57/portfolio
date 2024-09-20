import Head from "next/head";
import { Box, Button, Grid, Typography } from "@mui/material";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";
import nextConfig from "../../next.config.mjs";
const BASE_PATH = nextConfig.basePath || "";

export default function Index() {
    return (
        <>
            <Head>
                <title>tk-57 - Portfolio</title>
            </Head>
            <main>
                <Grid pt={4} maxWidth="xl">
                    <Grid item>
                        <Box
                            sx={{
                                position: "relative",
                                paddingBottom: 4,
                                fontSize: 16
                            }}
                        >
                            <Typography
                                component="h4"
                                variant="h4"
                                color="inherit"
                                gutterBottom
                            >
                                tk-57のプロフィール
                                <Image src={`${BASE_PATH}/profile_icon.png`} style={{ verticalAlign: "middle", marginLeft: 20 }} width={64} height={64} alt="profile_icon" />
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
                                component="h5"
                                variant="h5"
                                color="inherit"
                                sx={{ fontWeight: 'bold' }}
                                paragraph
                            >
                                About
                            </Typography>
                            <ul>
                                <li>仕事: Webアプリケーション開発</li>
                                <li>学歴: OCA大阪デザイン&テクノロジー専門学校 e-sports科</li>
                                <li>好きなもの: アニメ, 映画, VTuber, ゲーム, e-sports観戦, 旅行, 料理, 個人開発</li>
                                <li>仕事: Webアプリケーション開発</li>
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
                                component="h5"
                                variant="h5"
                                color="inherit"
                                sx={{ fontWeight: 'bold' }}
                                paragraph
                            >
                                Skill
                            </Typography>
                            <ul>
                                <li>好きな分野: インフラ, バックエンド, フロントエンド</li>
                                <li>好きな技術: Docker, Selenium, Tailwind CSS</li>
                                <li>得意な言語: Java, Python, PHP, JavaScript, TypeScript, HTML/CSS</li>
                                <li>経験したフレームワーク: Next.JS, React, Laravel, Spring, Express, Electron</li>
                                <li>
                                    経験したクラウド
                                    <ul>
                                        <li>
                                            AWS: Route53, CloudFront, ALB, VPC, EC2, ECS, ECR, Fargate, Lambda, API Gateway, Amplify, S3, SecretManager, IAM, CloudWatch, RDS, DynamoDB, LightSail
                                        </li>
                                        <li>
                                            GCP: Compute Engine, Firebase
                                        </li>
                                        <li>
                                            その他: CloudFlare, さくらVPS, Xserver VPS, Heroku
                                        </li>
                                    </ul>
                                </li>
                                <li>経験したOS: Amazon Linux, CantOS, Ubuntu, MacOS</li>
                                <li>その他: Docker, Selenium, Apache, Nginx, LiteSpeed, MySQL, PostgreSQL</li>
                                <li>触れてみたい・伸ばしたい技術: AWS, Vue, Nuxt, Webデザイン, グラフィックデザイン, Remix, GCP, Go, Azure, AI</li>
                            </ul>
                        </Box>
                    </Grid>

                    <Grid item container justifyContent="center" pb={4}>
                        <Button variant="contained" LinkComponent={Link} href="/resume" endIcon={<ArrowRightIcon />}>
                            RESUME
                        </Button>
                    </Grid>
                </Grid>
            </main >
        </>
    );
}

Index.getLayout = function getLayout(page: any) {
    return (
        <>
            <Layout>
                {page}
            </Layout>
        </>
    )
}
