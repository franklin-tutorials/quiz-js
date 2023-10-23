export const Questions = [
  {
    question: "Quels sont les principaux types de modèles de cloud ?",
    answers: [
      "Privé, Public et Hybride",
      "Interne, Externe et Combiné",
      "Local, Distant et Mixte",
    ],
    correct: "Privé, Public et Hybride",
  },
  {
    question:
      "Quelle est la différence entre une région AWS et une zone de disponibilité ?",
    answers: [
      "Une région est un ensemble de zones de disponibilité; une zone de disponibilité est un centre de données isolé.",
      "Une région est un data center; une zone de disponibilité est un cluster.",
      "Une région est un data center; une zone de disponibilité est un cluster dans ce data center.",
    ],
    correct:
      "Une région est un ensemble de zones de disponibilité; une zone de disponibilité est un centre de données isolé.",
  },
  {
    question: "Dans le contexte d'AWS, qu'est-ce qu'IAM ?",
    answers: [
      "Infrastructure and Management",
      "Instance and Machine",
      "Identity and Access Management",
    ],
    correct: "Identity and Access Management",
  },
  {
    question:
      "Quel service AWS est principalement utilisé pour le calcul évolutif dans le cloud ?",
    answers: ["DynamoDB", "Aurora", "Amazon EC2"],
    correct: "Amazon EC2",
  },
  {
    question:
      " Quel type de volume de stockage est directement attaché à une instance EC2 et est destiné à des données temporaires ?",
    answers: ["Amazon EFS", "Amazon EBS", "Stockage d'instance"],
    correct: "Stockage d'instance",
  },
  {
    question:
      "Quelle est la principale différence entre une instance EC2 standard et une instance EC2 optimisée pour le stockage ?",
    answers: [
      "L'optimisation pour le stockage offre plus de mémoire RAM.",
      "L'optimisation pour le stockage offre un meilleur débit pour Amazon EBS.",
      "L'optimisation pour le stockage peut accéder directement à Amazon S3.",
    ],
    correct:
      "L'optimisation pour le stockage offre un meilleur débit pour Amazon EBS.",
  },
  {
    question:
      "Quel service utilisez-vous pour distribuer le trafic entrant à plusieurs cibles, telles que des instances Amazon EC2 ?",
    answers: ["AWS VPC", "Amazon EBS", "Amazon Elastic Load Balancer (ELB)"],
    correct: "Amazon Elastic Load Balancer (ELB)",
  },
  {
    question:
      " Quel est le rôle de l'Amazon Machine Image (AMI) en relation avec EC2 ?",
    answers: [
      "Mesurer la performance des instances EC2.",
      "Fournir une sauvegarde complète des données sur EC2.",
      "Servir de modèle pour lancer de nouvelles instances EC2.",
    ],
    correct: "Servir de modèle pour lancer de nouvelles instances EC2.",
  },
  {
    question:
      "Quelle fonctionnalité EC2 vous permet de lancer et d'arrêter automatiquement vos instances en fonction de certaines conditions ?",
    answers: ["EC2 Replication", "EC2 Auto Scaling", "EC2 Load Balancer"],
    correct: "EC2 Auto Scaling",
  },
  {
    question:
      "Comment appelez-vous le réseau privé virtuel dédié à votre compte AWS ?",
    answers: [
      "Virtual Private Cloud (VPC)",
      "Amazon Network Service (ANS)",
      "Amazon CloudFront",
    ],
    correct: "Virtual Private Cloud (VPC)",
  },
];
