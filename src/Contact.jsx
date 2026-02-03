import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import ScrollAnimation from "./ScrollAnimation";
import Container from "@mui/material/Container";

export default function Contact() {
  const contactInfo = [
    {
      icon: <EmailIcon sx={{ fontSize: 40, color: "#1976d2" }} />,
      title: "Email",
      details: "contact@weathernow.com",
      link: null,
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 40, color: "#1976d2" }} />,
      title: "Phone",
      details: "+91 XXX-XXX-XXXX",
      link: null,
    },
    {
      icon: <LocationOnIcon sx={{ fontSize: 40, color: "#1976d2" }} />,
      title: "Location",
      details: "Bhubaneswar, Odisha, India",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: <GitHubIcon />,
      name: "GitHub",
      link: "#",
      color: "#333",
    },
    {
      icon: <LinkedInIcon />,
      name: "LinkedIn",
      link: "#",
      color: "#0077B5",
    },
    {
      icon: <TwitterIcon />,
      name: "Twitter",
      link: "#",
      color: "#1DA1F2",
    },
  ];

  return (
    <Box id="contact" py={10} bgcolor="#f8f9fa">
      <Container maxWidth="lg">
        {/* Header */}
        <ScrollAnimation variant="scale-blur">
          <Typography variant="h3" fontWeight="bold" textAlign="center" mb={2}>
            Get In <span style={{ color: "#1976d2" }}>Touch</span>
          </Typography>
        </ScrollAnimation>

        <ScrollAnimation variant="fade-up" delay={0.2}>
          <Typography
            variant="h6"
            textAlign="center"
            color="text.secondary"
            maxWidth={700}
            mx="auto"
            mb={8}
          >
            Have questions or feedback? We'd love to hear from you. Reach out
            through any of our contact channels below.
          </Typography>
        </ScrollAnimation>

        {/* Contact Info Cards */}
        <Grid container spacing={3} mb={8} justifyContent="center">
          {contactInfo.map((info, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <ScrollAnimation
                variant="blur-up"
                delay={index * 0.1}
                duration={0.7}
              >
                <Card
                  sx={{
                    height: "100%",
                    textAlign: "center",
                    p: 3,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow: 6,
                    },
                  }}
                >
                  <CardContent>
                    <Box display="flex" justifyContent="center" mb={2}>
                      {info.icon}
                    </Box>
                    <Typography variant="h6" fontWeight="bold" mb={1}>
                      {info.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {info.details}
                    </Typography>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            </Grid>
          ))}
        </Grid>

        {/* Social Links and Additional Info - Centered Layout */}
        <Grid container spacing={4} justifyContent="center">
          {/* Social Links Card */}
          <Grid item xs={12} md={6}>
            <ScrollAnimation variant="slide-right" duration={0.8}>
              <Card
                sx={{
                  p: 4,
                  borderRadius: "20px",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                  height: "100%",
                }}
              >
                <Typography variant="h5" fontWeight="bold" mb={3} textAlign="center">
                  Connect With Us
                </Typography>

                <Box display="flex" gap={2} mb={3} justifyContent="center">
                  {socialLinks.map((social, index) => (
                    <Box
                      key={index}
                      component="a"
                      href={social.link}
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: social.color,
                        color: "white",
                        transition: "all 0.3s ease",
                        textDecoration: "none",
                        cursor: "pointer",
                        "&:hover": {
                          transform: "translateY(-5px) scale(1.1)",
                          boxShadow: `0 8px 20px ${social.color}80`,
                        },
                      }}
                    >
                      {social.icon}
                    </Box>
                  ))}
                </Box>

                <Typography variant="body2" color="text.secondary" textAlign="center">
                  Follow us on social media for the latest updates and weather
                  tips!
                </Typography>
              </Card>
            </ScrollAnimation>
          </Grid>

          {/* Why Contact Us Card */}
          <Grid item xs={12} md={6}>
            <ScrollAnimation variant="slide-left" duration={0.8}>
              <Card
                sx={{
                  p: 4,
                  borderRadius: "20px",
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  color: "white",
                  boxShadow: "0 8px 32px rgba(102, 126, 234, 0.3)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography variant="h5" fontWeight="bold" mb={3} textAlign="center">
                  Why Contact Us?
                </Typography>

                <Box>
                  <Typography variant="body1" mb={1.5}>
                    ✓ Report bugs or issues
                  </Typography>
                  <Typography variant="body1" mb={1.5}>
                    ✓ Suggest new features
                  </Typography>
                  <Typography variant="body1" mb={1.5}>
                    ✓ Business inquiries
                  </Typography>
                  <Typography variant="body1">
                    ✓ General feedback
                  </Typography>
                </Box>
              </Card>
            </ScrollAnimation>
          </Grid>
        </Grid>

        {/* Additional Info Section */}
        <Box mt={8}>
          <ScrollAnimation variant="fade-up">
            <Card
              sx={{
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                p: 6,
                textAlign: "center",
                background:
                  "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)",
              }}
            >
              <Typography variant="h4" fontWeight="bold" mb={2} color="#1976d2">
                We're Here to Help!
              </Typography>
              <Typography variant="body1" color="text.secondary" maxWidth={600} mx="auto">
                Whether you have questions about our weather service, need
                technical support, or want to share your feedback, our team is
                ready to assist you. Feel free to reach out through any of our
                contact channels above.
              </Typography>
            </Card>
          </ScrollAnimation>
        </Box>
      </Container>
    </Box>
  );
}