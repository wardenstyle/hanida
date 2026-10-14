
<?php

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Méthode non autorisée']);
    exit;
}

$reponse = $_POST['reponse'] ?? '';

if (!in_array($reponse, ['oui', 'non'], true)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Réponse invalide']);
    exit;
}

$host = 'mysql-hanida.alwaysdata.net';
$dbname = 'hanida_bdd';
$username = 'hanida_admin';
$password = 'hani_david';

try {
    $pdo = new PDO(
        "mysql:host=$host;dbname=$dbname;charset=utf8mb4",
        $username,
        $password,
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
        ]
    );

    $stmt = $pdo->prepare(
        'INSERT INTO decision (reponse, `date`)
         VALUES (:reponse, NOW())'
    );

    $stmt->execute(['reponse' => $reponse]);

    echo json_encode(['success' => true]);
} catch (PDOException $e) {
    error_log('Erreur enregistrement décision : ' . $e->getMessage());
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => 'Erreur lors de l’enregistrement'
    ]);
}

?>
